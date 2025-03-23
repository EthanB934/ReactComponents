export const Button = ({ input, inputter, numbers, power, setPower }) => {
  const handlePowerOn = (event) => {
    if (!power) {
      setTimeout(() => {
        setPower(true);
      }, 1000)
    } else {
    setTimeout(() => {
      setPower(false)
        inputter([]);
      }, 1000)
    }
  };

  const handleKeypadInput = (event) => {
    if(power) {
      inputter([...input, parseInt(event.target.id)])
    }
    else {
      window.alert("Hmm...I may need to turn the phone on first...")
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
