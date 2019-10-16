import React, { useState } from "react";

const MemberForm = props => {
  const [member, setMember] = useState({
    name: "",
    github: "",
    linkedin: ""
  });
  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", github: "", linkedin: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        type="name"
        placeholder="Name"
        onChange={changeHandler}
        value={member.name}
      />

      <label htmlFor="github">GitHub</label>
      <input
        name="github"
        id="github"
        placeholder="GitHub"
        onChange={changeHandler}
        value={member.github}
      />

      <label htmlFor="linkedin">LinkedIn</label>
      <input
        name="linkedin"
        id="linkedin"
        placeholder="LinkedIn"
        onChange={changeHandler}
        value={member.linkedin}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;
