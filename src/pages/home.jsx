import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";

export const Home = () => {

  const nevigate = useNavigate()

  const goToPage = () => {
    nevigate("/Movies")
  }

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-20 bg-slate-950 text-white">
        <div className="text-2xl font-bold">
          🎬 MovieExplorer
        </div>

        <div className="flex items-center gap-6">


          <button
            onClick={goToPage}
            className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold hover:bg-red-700 transition"
          >
            Movies
          </button>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 text-white">
        {/* Movie Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80"
            alt="Movie theater"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0  from-slate-950 via-slate-950/80 to-slate-950/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative flex min-h-[calc(100vh-80px)] items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Welcome to MovieExplorer
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Discover Movies
              <span className="block text-red-500">
                You’ll Love.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Explore and discover your favorite movies from around the world.
              Find something exciting to watch and enjoy your next movie
              experience.
            </p>

            <button
              onClick={goToPage}
              className="mt-8 inline-flex items-center rounded-lg bg-red-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
            >
              Explore Now
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};