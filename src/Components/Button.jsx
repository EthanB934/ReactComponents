export const Button = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    return <div className="buttons">
      {numbers.map((number, index) => {return <button key={index} className="button">{number}</button>})}
  </div>
};
