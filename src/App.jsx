// Write your Color component here
import { useState } from "react";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="violet" setSelectedColor={setSelectedColor} />
        <Color color="red" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

const Color = ({ color, setSelectedColor }) => {
  return (
    <div
      className={`${color} ${"selected"}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

export default App;
