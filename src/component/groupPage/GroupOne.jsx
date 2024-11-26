import React from "react";

export default function GroupOne({ groups }) {

    return (
        <div className="">
            {groups.map((group) => {
                return (
                    <div className="">
                        <h3>{group.groupName}</h3>
                        <p>{group.description}</p>
                        <p>{group.id}</p>
                    </div>
                );
            })}
        </div>
    );
}
