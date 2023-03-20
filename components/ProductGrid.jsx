import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      });
  }, []);

  const handleAddProduct = () => {
    // Implement the logic to add a new product
    // ...
  };

  return (
    <div>
      <div className="product-grid">
        <div className="add-product-square">
          <IconButton onClick={handleAddProduct}>
            <AddIcon sx={{ color: "#9BBEED" }} style={{ fontSize: 90 }} />
          </IconButton>
        </div>
        {products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image_url}
                alt={product.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg";
                }}
              />
              <h2>{product.name}</h2>
              <p>Brand: {product.brand}</p>
              <p>Type: {product.type}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
