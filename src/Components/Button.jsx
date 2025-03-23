export const Button = ({ handler, inputter, numbers, power, setPower }) => {
  const handlePowerOn = (event) => {
    if (!power) {
      setTimeout(() => {
        setPower(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setPower(false);
        inputter([]);
      }, 1000);
    }
  };

  return (
    <div className="buttons">
      {numbers.map((number, index) => {
        if (index === 0) {
          return (
            <button
              key={index}
              id={number}
              onClick={handlePowerOn}
              className="fa-solid fa-power-off"
            ></button>
          );
        } else if (index === 1) {
          return <button key={index} className="fa-solid fa-phone"></button>;
        } else if (index === 11) {
          return (
            <button key={index} className="asterisk">
              {number}
            </button>
          );
        } else if (index === 13) {
          return (
            <button key={index} className="hashtag">
              {number}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              id={number}
              onClick={handler}
              className="button"
            >
              {number}
            </button>
          );
        }
      })}
    </div>
  );
};
