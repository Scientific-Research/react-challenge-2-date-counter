import { useState } from "react";

export default function App() {
  return (
    <>
      <DateCounter />
    </>
  );
}

export const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [day, setDay] = useState(0);

  function addDayToCurrentDate(days: number): Date {
    const currentDate = new Date();
    return new Date(currentDate.setDate(currentDate.getDate() + step * days));
  }

  // Example usage:
  const nextDay = addDayToCurrentDate(day);
  console.log(`Next day: ${nextDay.toDateString()}`);

  const handleIncrease = () => {
    setDay((d) => d + 1);
  };

  const handleDecrease = () => {
    setDay((d) => d - 1);
  };

  const handleIncreaseStep = () => {
    setStep((s) => s + 1);
  };

  const handleDecreaseStep = () => {
    setStep((s) => s - 1);
  };

  return (
    <>
      <div>
        <button onClick={handleDecreaseStep}>-</button>
        Step:{step}
        <button onClick={handleIncreaseStep}>+</button>
      </div>
      <div>
        <button onClick={handleDecrease}>-</button>
        Count:{day}
        <button onClick={handleIncrease}>+</button>
      </div>
      <h1>
        {day === 0 ? " day(s) from Today is " + nextDay.toDateString() : ""}
        {day > 0
          ? step * day + " day(s) from Today is " + nextDay.toDateString()
          : ""}
        {day < 0
          ? // ? step * -day + " day(s) ago was " + nextDay.toDateString()
            step * Math.abs(day) + " day(s) ago was " + nextDay.toDateString()
          : ""}
      </h1>
    </>
  );
};
