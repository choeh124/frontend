import './FeedPage.css'
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function FeedPage() {
    const authorization = window.sessionStorage.getItem("Authorization")
    const { groupId } = useParams();
    const [feeds, setFeeds] = useState([]); //피드 목록

    //화면 레더링 시 feed목록가져오기  api/groups/:groupId/feeds
    useEffect = (() => {
        const findFeed = async () => {
            const response = await axios.get(`http://localhost:8000/api/groups/${groupId}/feeds`);
            setFeeds(response.data);
        };
        findFeed();
    }, [])
    console.log('피드 목록 가져오기');
    console.log(feeds);





    return (
        <div className="FeedPage">
            <Header></Header>

            <div className='FPmainContent'>
                {/* 피드내용 */}
                <div className="FeedContent">
                    <div className="FeedInfo">
                        <div className="FeedInfoText">
                            <h2>산책 좋아</h2>
                            <p>산책이 너무 좋은 사람들</p>
                            <p>leader nickname</p>
                        </div>
                        <button>피드 생성</button>
                    </div>
                    <div className="FeedList">
                        <p>너무 너무 좋네요</p>
                        <p>nickname</p>
                        <p>2024.11.27</p>
                    </div>
                </div>
                {/* 피드채팅 */}
                <div className="FeedChating"></div>
            </div>

            <Footer></Footer>
        </div>


    )
}