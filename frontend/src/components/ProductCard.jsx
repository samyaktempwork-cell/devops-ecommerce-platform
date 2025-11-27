import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "330px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          transition: "0.2s",
        }}
      >
        {/* Image container */}
        <div
          style={{
            width: "100%",
            height: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Name */}
        <h3 style={{ margin: "0 0 0.5rem" }}>{product.name}</h3>

        {/* Price */}
        <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
          ₹{product.price}
        </p>

        {/* Button */}
        <button
          style={{
            padding: "0.5rem 1rem",
            background: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault(); // Prevent link navigation on button click
            console.log("Add to cart clicked:", product.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
