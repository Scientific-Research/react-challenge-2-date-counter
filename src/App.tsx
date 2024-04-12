import { ChangeEvent, useState } from "react";

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

  // const handleIncreaseStep = () => {
  //   setStep((s) => s + 1);
  // };

  // const handleDecreaseStep = () => {
  //   setStep((s) => s - 1);
  // };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    const result = parseInt(e.target.value);
    setDay(result);
  };

  const handleSlider = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    const result = parseInt(e.target.value);
    setStep(result);
  };

  const handleReset = () => {
    setDay(0);
    setStep(1);
  };

  return (
    <>
      <div>
        {/* <button onClick={handleDecreaseStep}></button> */}
        {/* Step:{step} */}

        {/* we need onChange here to handle the changed value in slider! */}
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => handleSlider(e)}
        />
        {step}
        {/* <button onClick={handleIncreaseStep}></button> */}
      </div>

      <div>
        <button onClick={handleDecrease}>-</button>
        {/* Count:{day} */}

        {/* we need onChange here to handle the entered value in field! */}
        <input type="text" value={day} onChange={(e) => handleInput(e)} />
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

      {/* using && */}
      {/* {(day != 0 || step != 1) && <button onClick={handleReset}>Reset</button>} */}

      {/* OR using ternary operator: */}
      {day != 0 || step != 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </>
  );
};
