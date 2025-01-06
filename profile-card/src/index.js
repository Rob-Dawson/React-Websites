import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skillList = [
  {
    skill: "Robotics",
    level: "advanced",
    background: "#FF0",
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
  {
    skill: "React",
    level: "beginner",
    background: "#FF00FF",
  },
  {
    skill: "Machine Learning",
    level: "beginner",
    background: "#FAA",
  },
  {
    skill: "Web Development",
    level: "beginner",
    background: "#0F0",
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
      {skillList.map((skill) => (
        <Skill
          skill={skill.skill}
          background={skill.background}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Skill({ skill, background, level }) {
  return (
    <div style={{ background: background }} className="skill">
      <p>{skill}</p>
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
