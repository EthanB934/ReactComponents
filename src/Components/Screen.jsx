export const Screen = ({ power, numbers }) => {
  return (
    <>
      {!power ? (
        <div className="phone-top">
          <div className="phone-screen-off"></div>
        </div>
      ) : (
          <div className="phone-top">
            <div className="phone-screen-on"></div>
          </div>
      )}
    </>
  );
};
