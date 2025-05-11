import Link from "next/link";

function SingleProduct({ id, title, price, image }) {
  return (
    <div className="px-3 py-5 outline-1 rounded-2xl flex flex-col items-center space-y-3">
      <img
        src={image}
        alt={title}
        className="w-64 h-auto outline rounded-2xl bg-gradient-to-br from-gray-800 via-gray-400 to-gray-800"
      />
      <h1 className="opacity-75 italic">ID : {id}</h1>
      <h1 className="font-light text-lg">{title}</h1>
      <h1>Price : {price}</h1>
      <Link
        href={`/products`}
        className="inline-block px-4 py-2 rounded font-bold border border-gray-400 
      hover:border-transparent
                 text-transparent bg-clip-text bg-gradient-to-r 
                 from-purple-500 to-amber-500 hover:to-purple-600 
                 hover:from-amber-500 transition-colors duration-300"
      >
        Return to Products
      </Link>
    </div>
  );
}

export default SingleProduct;
