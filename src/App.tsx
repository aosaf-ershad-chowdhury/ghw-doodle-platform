import { useState } from "react";
import CanvasComponent from "./CanvasComponent";
import ToolbarComponent from "./ToolbarComponent";

const App = () => {

  const [selectedColor, setSelectedColor] = useState("#FF5733");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <main>
      <h1
        style={{
          textAlign: "center",
          // fontSize: "2rem",
          marginBottom: "20px",
          color: "#333",
          padding: "4px 0",
        }}
      >
        Doodle Platform
      </h1>
      <ToolbarComponent selectedColor={selectedColor} onColorChange={handleColorChange} />
      <CanvasComponent selectedColor={selectedColor} />
    </main>
  );
};

export default App;
