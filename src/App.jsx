/* eslint-disable react/jsx-no-undef */
import { products as initialProdcuts } from "./mocks/products.json";
import Products from "./components/Products.jsx"; // Importa el componente correctamente
import { useState } from "react";
import Header from "./components/Header.jsx";

function App() {
  const [products] = useState(initialProdcuts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  // Sistema de Filtrado
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      );
    });
  };

  const filteredProducts = filterProducts(products);

  console.log('Productos Filtrados:', filteredProducts); // Agrega esta línea

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
