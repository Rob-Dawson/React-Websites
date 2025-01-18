import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is react based on?",
    answer: "Javascript",
  },
  {
    id: 7336,
    question: "What are the building blocks of react apps?",
    answer: "Components",
  },

  {
    id: 8832,
    question:
      "What is the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How do you pass data from a parent to a child component?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How do you give a component memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completley synchronised with ",
    answer: "Controlled Element",
  },
];

export default function App() {
  return (
    <div className="App ">
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  const [selectedID, setSelectedId] = useState(null);

  function handleSelectedID(id) {
    if (id === selectedID) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedID ? "selected" : ""}
          onClick={() => handleSelectedID(question.id)}
        >
          <p>
            {question.id === selectedID ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
