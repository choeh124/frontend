import "./Pagination.css"

export default function Pagination(){
    return (
        <div className="pagination">
          <button>
            이전
          </button>
          <div className="pageList">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <button>
            다음
          </button>
        </div>
    )
}