import CanvasComponent from "./CanvasComponent"

const App = () => {
  return (
    <main>
      <h1 style={{
        textAlign: "center",
        // fontSize: "2rem",
        marginBottom: "20px",
        color: "#333",
        padding: "4px 0"
      }}>Doodle Platform</h1>
      <CanvasComponent />
    </main>
  )
}

export default App