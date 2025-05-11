import Link from "next/link";

function Navbar() {
  return (
    <nav className="h-18 flex items-center px-3 space-x-3  bg-gradient-to-r  bg-black">
      <span className="font-black text-transparent bg-clip-text  bg-gradient-to-r from-zinc-500 to-zinc-700 hover:to-zinc-300 hover:from-zinc-700 transition-colors duration-700 cursor-pointer">
        Prods.
      </span>
      <ul className="w-full flex space-x-4 px-3 justify-center">
        <Link
          className="opacity-70 hover:opacity-100 transition-all duration-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="opacity-70 hover:opacity-100 transition-all duration-300"
          href="/products"
        >
          Products
        </Link>
        <Link
          className="opacity-70 hover:opacity-100 transition-all duration-300"
          href="/about"
        >
          About
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
