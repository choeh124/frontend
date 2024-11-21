import './PostWrite.css'
import Header from "../Header"
import Footer from "../Footer"
import { useEffect, useState } from 'react'
import axios from 'axios'
import './WriteText.css'
import './WriteImage.css'

export default function PostWrite(){

    // const authorization = window.sessionStorage.getItem("Authorization")
    // console.log(authorization);
    // useEffect(()=>{
    //     const finduser = async() =>{
    //         const response = await axios.get(`localhost:8000/api/posts`,{
    //             headers:{
    //                 Authorization : authorization
    //             }
    //         })
    //     }
    // })
    
    
    
    

    return(
        <div>
            <Header></Header>
            <div className='container'>
                <div className="PostWrite">
                    <h2>게시글 작성하기</h2>

                    <div className='PWmain-content'>
                        <div className='WriteImage'>
                            <div className='WimageBox'>
                                <img src="" alt="" />
                                <p>이미지를 추가해 주세요</p>
                            </div>
                            <div className='WimageInfo'>
                                <p></p>
                                <p></p>
                            </div>
                        </div>

                        <div className='WriteText'>
                            <form action="">
                                <div className='text-box'>
                                    <input type="text" placeholder="제목을 입력해 주세요" />
                                    <textarea className='content' type="text" placeholder="본문을 입력해 주세요"></textarea>
                                    <div className='write-button-box'>
                                        <button>취소</button>
                                        <button>완료</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}