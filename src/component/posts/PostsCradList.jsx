import axios from "axios";
import React, { useState, useEffect } from "react"
import PostsCard from "./PostsCard"

export default function PostsCardList(){
    const [posts, Setposts] = useState([]);

    useEffect(()=>{
        const findPost = async ()=>{
            const response = await axios.get(`http://127.0.0.1:8000/api/posts`);
            const data =response.data;
            console.log(data);
            Setposts(data);
        }
        findPost();
        
    })
    
    return(
        <div className="PostsCardList">
            <PostsCard posts={posts}></PostsCard>

        </div>
    )
}