//PostEdit.jsx
import './PostEdit.css'
import Header from '../Header'
import Footer from "../Footer"
import './EditImage.css'
import './EditText.css'
import {useState, useEffect} from 'react';
import axios from 'axios'

export default function PostEdit({match}){
    const postId = match.params.id; // URL에서 게시물 ID 추출
    const authorization = window.sessionStorage.getItem("Authorization");

     // 상태 관리
     const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: '',
    });
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    // 게시물 데이터 가져오기
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`//localhost:8000/api/posts/${postId}`, {
                    headers: {
                        Authorization: authorization
                    },
                });
                const { title, content, category, image_url } = response.data;

                setFormData({ title, content, category });
                if (image_url) {
                    setPreview(image_url); // 기존 이미지 미리 보기 설정
                }
            } catch (error) {
                console.error("게시물 로드 실패:", error);
                alert("게시물 정보를 가져오지 못했습니다.");
            }
        };
        fetchPost();
    }, [postId, authorization]);

    // 입력 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (!selectedFile.type.startsWith('image/')) {
                alert('이미지 파일만 업로드할 수 있습니다.');
                return;
            }
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    // 수정 요청 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();

        // FormData 객체 생성
        const data = new FormData();
        data.append('title', formData.title);
        data.append('content', formData.content);
        data.append('category', formData.category);
        if (file) {
            data.append('file', file);
        }

        try {
            const response = await axios.put(`//localhost:8000/api/posts/${postId}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: authorization
                },
            });
            console.log('수정 성공:', response.data);
            alert('게시물이 수정되었습니다!');
            // 수정된 게시물 페이지로 이동
            window.location.href = `/posts/${postId}`;
        } catch (error) {
            console.error('수정 실패:', error);
            alert('게시물 수정에 실패했습니다.');
        }
    };

    return(
        <div>
             <Header></Header>
            <div className='container'>
                <div className="PostWrite">
                    <h2>게시글 수정하기</h2>
                    <div className='PWmain-content'>
                            <div className='EditImage'>
                                {preview ? <img src={preview} alt="" /> : <div className='WimageBox'></div>}
                                <input type="file" accept="image/*" onChange={handleFileChange} />
                                <div className='WimageInfo'>
                            </div>
                            <div className='EditText'>
                                <form onSubmit="{handlesubmit}">
                                    <div className='text-box'>
                                        <input type="text" placeholder="제목을 입력해 주세요"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                        />
                                        <input type="text"
                                            placeholder='카테고리를 입력해 주세요'
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            required
                                        />
                                        <textarea className='content' type="text" 
                                            placeholder="본문을 입력해 주세요"
                                            name="content"
                                            value={formData.content}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                        <div className='write-button-box'>
                                            <button type="button" onClick={() => {window.location.href = '/posts/${postId}';}}>취소</button>
                                            <button type="submit">수정</button>
                                        </div>
                                    </div>
                                </form>
                             </div>
                        </div>                
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}