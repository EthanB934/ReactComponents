export const Button = () => {
  const numbers = ["power", "call", 1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];
  return (
    <div className="buttons">
      {numbers.map((number, index) => {
        if (index === 0) {
          return (
            <button key={index} className="fa-solid fa-power-off"></button>
          );
        } 
        else if (index === 1) {
            return (
              <button key={index} className="fa-solid fa-phone"></button>
            );
          }
        else if (index === 9) {
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
            <>
              <button key={index} className="button">
                {number}
              </button>
            </>
          );
        }
      })}
    </div>
  );
};
