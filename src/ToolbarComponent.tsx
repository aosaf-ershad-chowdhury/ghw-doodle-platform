const PREDEFINED_COLORS = [
  "#FF5733", // Red
  "#00ff00", // Green
  "#0000FF", // Blue
  "#1e1e1e", // Dark Gray
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
];

interface ToolbarProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ToolbarComponent: React.FC<ToolbarProps> = ({
  selectedColor,
  onColorChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        padding: "10px",
        backgroundColor: "#f5f5f5",
        maxWidth: "800px",
        margin: "0 auto",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        Colors:
      </div>
      {PREDEFINED_COLORS.map((color) => (
        <button
          key={color}
          title={`Select color ${color}`}
          aria-label={`Select color ${color}`}
          style={{
            backgroundColor: color,
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            margin: "2px",
            cursor: "pointer",
            border:
              selectedColor === color ? "3px solid #2d2de5" : "2px solid #ccc",
          }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
};

export default ToolbarComponent;
