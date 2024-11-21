import React, { useState } from "react";
import "./Pagination.css";
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

  // 이전 페이지 (10개 단위로 이동)
  const prevPage = () => {
    if (currentPage > 10) {
      setCurrentPage(currentPage - 10); // 10개 단위로 페이지 감소
    } else {
      setCurrentPage(1); // 첫 페이지로 이동
    }
  };

  // 다음 페이지 (10개 단위로 이동)
  const nextPage = () => {
    if (currentPage + 10 <= totalPages) {
      setCurrentPage(currentPage + 10); // 10개 단위로 페이지 증가
    } else {
      setCurrentPage(totalPages); // 마지막 페이지로 이동
    }
  };

  // 페이지 번호 배열 생성 (10개씩 표시할 페이지 번호)
  const pageNumbers = [];
  const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="prev-btn"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        ◀
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`page-btn ${currentPage === page ? "active" : ""}`}
          onClick={() => goToPage(page)}
        ></button>
      ))}

      <button
        className="next-btn"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        ▶
      </button>
    </div>
  );
}
