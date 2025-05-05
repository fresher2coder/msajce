import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// Replace this with the actual user ID
const USER_ID = "user123";

const daysData = [
  {
    day: "Day 1",
    title: "React Fundamentals",
    tasks: ["JSX", "Functional Components", "Props", "Basic State"],
  },
  {
    day: "Day 2",
    title: "State & Events",
    tasks: ["useState", "Event Handling", "Conditional Rendering", "Lists"],
  },
  {
    day: "Day 3",
    title: "useEffect & Side Effects",
    tasks: ["useEffect", "Lifecycle", "API Fetching"],
  },
  {
    day: "Day 4",
    title: "Forms",
    tasks: ["Controlled Inputs", "Form Handling", "Validation"],
  },
  {
    day: "Day 5",
    title: "Context & Communication",
    tasks: ["Prop Drilling", "useContext", "Custom Hooks", "Reducer"],
  },
  {
    day: "Day 6",
    title: "Routing & Project",
    tasks: ["React Router", "Multi-Page App", "Final Project"],
  },
];

const App = () => {
  const [checked, setChecked] = useState({});

  // Fetch progress from backend on mount
  useEffect(() => {
    axios.get(`http://localhost:5000/api/progress/${USER_ID}`).then((res) => {
      if (res.data?.completed) {
        setChecked(res.data.completed);
      }
    });
  }, []);

  // Save to backend on checkbox toggle
  const toggleCheck = (dayIndex, taskIndex) => {
    const key = `${dayIndex}-${taskIndex}`;
    const updated = { ...checked, [key]: !checked[key] };
    setChecked(updated);

    // Save updated state to backend
    axios.post("http://localhost:5000/api/progress/save", {
      userId: USER_ID,
      completed: updated,
    });
  };

  const totalTasks = daysData.reduce((acc, day) => acc + day.tasks.length, 0);
  const completedTasks = Object.values(checked).filter(Boolean).length;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <Container>
      <Title>React 6-Day Learning Plan</Title>
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>
      <DaysWrapper>
        {daysData.map((day, i) => (
          <DayCard key={i}>
            <h3>
              {day.day} - {day.title}
            </h3>
            {day.tasks.map((task, j) => (
              <label key={j}>
                <input
                  type="checkbox"
                  checked={!!checked[`${i}-${j}`]}
                  onChange={() => toggleCheck(i, j)}
                />
                {task}
              </label>
            ))}
          </DayCard>
        ))}
      </DaysWrapper>
    </Container>
  );
};

export default App;

// Styled Components
const Container = styled.div`
  font-family: "Segoe UI", sans-serif;
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ProgressBar = styled.div`
  height: 25px;
  width: 100%;
  background: #eee;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: linear-gradient(
    to right,
    #6ee7b7 0%,
    #3b82f6 33%,
    #9333ea 66%,
    #f43f5e 100%
  );
  transition: width 0.3s ease;
`;

const DaysWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const DayCard = styled.div`
  background: #f9f9f9;
  border: 2px solid #ddd;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  h3 {
    margin-bottom: 0.75rem;
    color: #3b82f6;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    cursor: pointer;

    input {
      margin-right: 0.5rem;
    }
  }
`;
