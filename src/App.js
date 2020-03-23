import React, { useState } from "react";
import ReactDOM from "react-dom";
import Members from "./components/Member";
import MemberForm from "./components/MemberForms";
//mimic fetching data from an API
import data from "./data";
import "./App.css";

function App() {
  const [members, setMembers] = useState(data);

  const addNewMember = member => {
    setMembers([...members, member]);
  };
  return (
    <div className="App">
      <h1>My Team</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members membersList={members} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
