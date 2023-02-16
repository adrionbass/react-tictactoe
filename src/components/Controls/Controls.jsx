import "./Controls.css";

const Controls = ({ btn1, btn2 }) => (
  <div className="controls-container">
    <button onClick={btn1}>Reset</button>
    <button onClick={btn2}>Restart</button>
  </div>
);

export default Controls;
