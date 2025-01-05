import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skillList = [
  {
    skill: "Robotics",
    level: "beginner",
    background: "#FF0000",
  },
  {
    skill: "Android",
    level: "intermediate",
    background: "#00FF00",
  },
  {
    skill: "Web",
    level: "advanced",
    background: "#00FF",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img className="avatar" src="spock.jpg" alt="spock"></img>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Spock</h1>
      <p>I do stuff with stuff. The stuff i do i like and do other stuff</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill
        skill={skillList.at(0).skill}
        level={skillList.at(0).level}
        background={skillList.at(0).background}
      />
      <Skill
        skill={skillList.at(1).skill}
        level={skillList.at(1).level}
        background={skillList.at(1).background}
      />
      <Skill
        skill={skillList.at(2).skill}
        level={skillList.at(2).level}
        background={skillList.at(2).background}
      />
    </div>
  );
}

function Skill(props) {
  const level = props.level;
  return (
    <div style={{ background: props.background }} className="skill">
      <p>{props.skill}</p>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
