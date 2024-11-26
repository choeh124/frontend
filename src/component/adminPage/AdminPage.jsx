import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./AdminPage.css";
import Pagination from "../posts/Pagination";
import axios from "axios";

export default function AdminPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [reports, setReports] = useState([]);
  useEffect(() => {
    const authorization = sessionStorage.getItem("Authorization");
    async function fetchTotalPages() {
      const response = await axios.get("http://127.0.0.1:8000/api/reports", {
        headers: { Authorization: authorization },
      });
      setReports(response.data.count);
      console.log(reports);
    }
    async function fetchTotalPages() {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/reports/count",
        { headers: { Authorization: authorization } }
      );
      setTotalPages(response.data.count);
      console.log(totalPages);
    }
    fetchTotalPages();
  }, []);
  return (
    <div>
      <Header />

      <div className="group-outer-box">
        <h1 className="admin-title">Admin</h1>
        <div className="group-inner-box">
          <div className="group-box">
            <div className="group-border-box">
              <div className="admin-box">
                <h2>공지사항</h2>

                <textarea className="notice"></textarea>
                <button className="notice-button">공지사항 배포</button>
              </div>
            </div>
            <div className="group-border-box">
              <div className="admin-box">
                <h2 className="admin-subtitle">그룹 삭제</h2>
                <div className="group-name-box">
                  <label className="admin-label">그룹 이름</label>
                  <input className="group-name" />
                </div>
                <button className="group-delete-button">그룹 삭제</button>
              </div>
            </div>
          </div>
          <div className="group-border-box">
            <div id="report-list"></div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            ></Pagination>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
