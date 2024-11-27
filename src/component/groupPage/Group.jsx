import React from "react";

export default function Group({ groups }) {
  return (
    <div className="">
      {groups.map((group) => {
        return (
          <div
            className=""
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/groups/${group.id}/feeds`;
            }}
          >
            <h3>{group.groupName}</h3>
            <p>{group.description}</p>
            <p>{group.leaderNickname}</p>
          </div>
        );
      })}
    </div>
  );
}
