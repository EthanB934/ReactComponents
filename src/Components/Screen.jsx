export const Screen = ({ power, input }) => {
  return (
    <>
      {!power ? (
        <div className="phone-top">
          <div className="phone-screen-off"></div>
        </div>
      ) : (
        <div className="phone-top">
          <div className="phone-screen-on">
              {input
                .map((number) => {
                  return <p className="input-numbers">{number}</p>;
                })
                .reverse()}
          </div>
          <div className="numbers-container"></div>
        </div>
      )}
    </>
  );
};
