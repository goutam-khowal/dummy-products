import ProductButton from "./ProductButton";

function ProductCard({ id, title, price }) {
  return (
    <div className="px-3 py-5 outline-1 rounded-2xl">
      <h1>{id}</h1>
      <h1>{title}</h1>
      <h1>{price}</h1>
      <ProductButton key={id} id={id} />
    </div>
  );
}

export default ProductCard;
