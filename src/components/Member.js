import React from "react";

const Members = props => {
  return (
    <div className="member-list">
      {props.membersList.map((member, index) => {
        return (
          <div className="member" key={index}>
            <h2>Name: {member.name}</h2>
            <p>GitHub: {member.github}</p>
            <p>LinkedIn: {member.linkedin}</p>
            <button> Edit </button>
          </div>
        );
      })}
    </div>
  );
};
export default Members;
