import { useEffect, useState } from "react";

export default function ProductGrid({ search, category }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = new URL(`${backendUrl}/products`);

        if (search) url.searchParams.append("search", search);
        if (category) url.searchParams.append("category", category);

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    fetchProducts();
  }, [search, category]);

  return (
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      {products.map((p) => (
        <div key={p.id} style={{ width: "250px" }}>
          <img
            src={p.image}
            alt={p.name}
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
          />
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
