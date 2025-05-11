import ProductCard from "@/components/Products/ProductCard";
import axios from "axios";

async function getAllProducts() {
  const response = await axios.get("https://dummyjson.com/products");

  const data = response.data;

  return data.products;
}
getAllProducts();

async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="flex flex-col space-y-10 px-5">
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </main>
  );
}

export default ProductsPage;
