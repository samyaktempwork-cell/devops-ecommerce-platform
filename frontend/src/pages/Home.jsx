import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Products</h1>
      <p style={{ marginBottom: "2rem", color: "#555" }}>
        Browse our latest items from the DevOps E-Commerce demo store.
      </p>

      <ProductGrid />
    </div>
  );
}
