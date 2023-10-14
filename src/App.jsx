import { useState } from "react";
import questions from "./data";
import Question from "./Question";
const App = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    const newId = id === activeId ? null : id;
    setActiveId(newId);
  };

  return (
    <main>
      <h2>Questions</h2>
      <ul>
        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              {...question}
              toggle={toggle}
              activeId={activeId}
            />
          );
        })}
      </ul>
    </main>
  );
};
export default App;
