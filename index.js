const Box = (props) => {
  const { bgColor, text } = props;
  const containerColor = `containerDimensions ${bgColor}`;
  return (
    <div className={containerColor}>
      <p className="textColor">{text}</p>
    </div>
  );
};

const element = (
  <div className="bgContainer">
    <h1 className="headingText">Boxes</h1>
    <div className="box-container">
      <Box bgColor="smallBox" text="Small" />
      <Box bgColor="mediumBox" text="Medium" />
      <Box bgColor="largeBox" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
