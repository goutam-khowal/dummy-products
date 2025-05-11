import Link from "next/link";

function ProductButton({ id }) {
  return (
    <Link
      href={`/products/${id}`}
      className="inline-block px-4 py-2 rounded font-bold border border-gray-400 
      hover:border-transparent
                 text-transparent bg-clip-text bg-gradient-to-r 
                 from-purple-500 to-amber-500 hover:to-purple-600 
                 hover:from-amber-500 transition-colors duration-300"
    >
      See Product
    </Link>
  );
}

export default ProductButton;
