import React, { useState, useEffect } from "react";
import MyGroup from "./MyGroup";

export default function MyGroupList() {
  const token = window.sessionStorage.getItem("Authorization");
  const [groups, SetGroups] = useState([]);
  useEffect(() => {
    // 컴포넌트가 마운트될 때 API 호출
    const fetchData = async () => {
      fetch(`http://localhost:8000/api/groups/mygroups`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("네트워크 응답에 문제가 있습니다.");
          }
          return response.json();
        })
        .then((data) => {
          SetGroups(data);
        })
        .catch((error) => {});
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <MyGroup groups={groups}></MyGroup>
    </div>
  );
}
