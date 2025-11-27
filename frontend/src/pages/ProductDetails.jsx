import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendUrl}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error loading product:", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "350px",
          objectFit: "contain",
          marginBottom: "2rem",
        }}
      />

      <h1>{product.name}</h1>
      <h2>₹{product.price}</h2>
      <p style={{ marginTop: "1rem" }}>{product.description}</p>

      <button
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
