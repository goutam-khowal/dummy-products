function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 text-white px-4">
      <h1 className="text-[100px] sm:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-800  to-indigo-800 drop-shadow-md">
        404
      </h1>
      <p className="text-xl sm:text-2xl font-semibold mb-4 text-zinc-200">
        Oops! Page not found.
      </p>
      <p className="text-md sm:text-lg text-zinc-400 mb-6 max-w-md text-center">
        The page you're looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-600 transition-all duration-200 text-white font-semibold shadow-lg"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default NotFoundPage;
