import { useState } from "react";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Products</h1>
      <p>Browse and filter items from the DevOps E-Commerce demo store.</p>

      {/* Search + Filter UI */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.6rem",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "0.6rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">All Categories</option>
          <option value="Accessories">Accessories</option>
          <option value="Computers">Computers</option>
        </select>
      </div>

      {/* Pass filters to ProductGrid */}
      <ProductGrid search={search} category={category} />
    </div>
  );
}
