import React, { useState } from "react";
import "./Pagination.css"; // 스타일을 별도의 CSS 파일에서 관리

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  // 페이지 번호 버튼 클릭 시 처리
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return; // 범위 외 페이지 번호는 무시
    setCurrentPage(page);
  };

  // 이전 페이지
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 다음 페이지
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 페이지 번호 배열 생성
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="page-btn prev-btn"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        ◀
      </button>

      {/* 페이지 번호 버튼 생성 */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`page-btn ${currentPage === page ? "active" : ""}`}
          onClick={() => goToPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="page-btn next-btn"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        ▶
      </button>
    </div>
  );
}
