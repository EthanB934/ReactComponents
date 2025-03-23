export const Button = ({ input, inputter, numbers, power, setPower }) => {
  const handlePowerOn = (event) => {
    if (!power) {
      setPower(true);
    } else {
      setPower(false);
    }
  };

  const handleKeypadInput = (event) => {
    inputter([...input, parseInt(event.target.id)])
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
        } else if (index === 9) {
          return (
            <button key={index} className="asterisk">
              {number}
            </button>
          );
        } else if (index === 11) {
          return (
            <button key={index} className="hashtag">
              {number}
            </button>
          );
        } else {
          return (
            <button key={index} id={number} onClick={handleKeypadInput} className="button">
              {number}
            </button>
          );
        }
      })}
    </div>
  );
};
