import Footer from "../Footer";
import Header from "../Header";
import "./AdminPage.css";
export default function AdminPage() {
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

                <textarea></textarea>
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
          <div className="group-border-box"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
