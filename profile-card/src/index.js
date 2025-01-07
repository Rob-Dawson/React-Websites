import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
const skillslist = [
  {
    skill: "robotics",
    level: "advanced",
    background: "#FF00FF",
  },
  {
    skill: "Machine Learning",
    level: "intermediate",
    background: "#FFFF00",
  },
  {
    skill: "Web Development",
    level: "intermediate",
    background: "#0000FF",
  },
  {
    skill: "React",
    level: "beginner",
    background: "#FFAFA1",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillsList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="spock.jpg" alt="spock" />;
}

function Intro() {
  return (
    <div>
      <h1>Spock</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        scelerisque nibh eget orci luctus posuere a non odio. Morbi commodo
        felis ante, nec vulputate lorem rutrum eu. Fusce id posuere lectus.
      </p>
    </div>
  );
}

function SkillsList() {
  return (
    <div className="skill-list">
      {skillslist.map((skills) => (
        <Skill
          skill={skills.skill}
          level={skills.level}
          background={skills.background}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, background }) {
  return (
    <div className="skill" style={{ backgroundColor: background }}>
      {
        <span>
          {skill}
          {level === "beginner" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advanced" && "💪"}
        </span>
      }
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
