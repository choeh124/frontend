import axios from "axios";
import React, { useState, useEffect } from "react";
import PostsCard from "./PostsCard";
import Pagination from "./Pagination";
export default function PostsCardList() {
  const [posts, Setposts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  useEffect(() => {
    const findPost = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/posts?page=${currentPage}`
      );
      const data = response.data;
      Setposts(data);
    };

    const findTotalPages = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/posts/count`);
      const data = response.data;
      settotalPages(data.count);
    };
    findPost();
    findTotalPages();
  });

  return (
    <div className="PostsCardList">
      <PostsCard posts={posts}></PostsCard>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      ></Pagination>
    </div>
  );
}
