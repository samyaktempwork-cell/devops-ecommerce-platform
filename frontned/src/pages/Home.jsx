export default function Home() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <h1>Welcome to the DevOps E-Commerce Platform</h1>
      <p>This is Section 1 – Basic Layout Working!</p>

      <div style={{
        marginTop: "2rem",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "250px"
      }}>
        <h3>Sample Product</h3>
        <p>Price: $49.99</p>
        <button style={{
          padding: "0.5rem 1rem",
          background: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
