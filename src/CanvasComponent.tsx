import { useEffect, useRef, useState } from "react";

const CanvasComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasContext, setCanvasContext] =
    useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 5;
        setCanvasContext(ctx);
        ctx.fillStyle = "#ffaa00";
        ctx.fillRect(0, 10, 100, 100);
      }
    }
  }, []);

  const getMouseCoordinates = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };
  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasContext) return;
    canvasContext.beginPath();
    const { x, y } = getMouseCoordinates(event);
    canvasContext.moveTo(x, y);
    setIsDrawing(true);
  };
  const stopDrawing = () => {
    if (!canvasContext) return;
    canvasContext.closePath();
    setIsDrawing(false);
  };
  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasContext) return;

    const { x, y } = getMouseCoordinates(event);

    canvasContext.lineTo(x, y);
    canvasContext.stroke();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
        onMouseUp={stopDrawing}
        style={{
          width: "850px",
          height: "600px",
          cursor: "crosshair",
          border: "1px solid #000",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        Your browser does not support canvas HTML5 API
      </canvas>
    </div>
  );
};

export default CanvasComponent;
