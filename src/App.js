import { useState, useCallback } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

import "modern-normalize/modern-normalize.css";
import "./index.css";

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const changed = () => {
    const arrOfValue = Object.values(state);
    const total = arrOfValue.reduce((acc, el) => {
      return acc + el;
    });
    return total > 0 ? true : false;
  };

  const handleClick = useCallback((name) => {
    setState((prevState) => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  }, []);

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, el) => acc + el, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const procent = (good / countTotalFeedback()) * 100;
    return procent ? Math.round(procent) : 0;
  };

  const { good, neutral, bad } = state;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {changed() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={`${countPositiveFeedbackPercentage()}%`}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback." />
        )}
      </Section>
    </>
  );
};

export default App;
