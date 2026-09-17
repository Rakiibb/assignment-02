export const DetailModal = ({ setClick, selectedMovieData }) => {

    console.log(selectedMovieData)
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">

            {/* Modal Card */}
            <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">

                {/* Close Button */}
                <button
                    onClick={() => setClick(false)}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-red-600"
                >
                    ✕
                </button>

                {/* Modal Content */}
                <div className="grid md:grid-cols-2">

                    {/* Movie Poster */}
                    <div className="h-80 md:h-[500px]">
                        <img
                            src={selectedMovieData.image.medium}
                                alt={selectedMovieData.title}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Movie Details */}
                    <div className="p-6 md:p-8">

                        <h2 className="text-3xl font-bold text-white">
                            {selectedMovieData.name}
                        </h2>

                        <p className="mt-2 text-slate-400">
                            • {selectedMovieData.runtime} Minute
                        </p>

                        {/* Rating */}
                        <div className="mt-4 flex items-center gap-2">
                            <span className="text-yellow-400">
                                ⭐ {selectedMovieData.rating.average}
                            </span>

                        </div>

                        {/* Genres */}
                        <div className="mt-5 flex flex-wrap gap-2">


                            {selectedMovieData.genres.map((genre, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-red-600/20 px-3 py-1 text-sm text-red-400"
                                >
                                    {genre}
                                </span>
                            ))}

                        </div>

                        {/* Description */}
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-white">
                                About Movie
                            </h3>

                            <p className="mt-2 leading-6 text-slate-400">
                                {selectedMovieData.summary
                                    ?.replace(/<[^>]*>/g, "").split(" ")
                                    .slice(0, 40)
                                    .join(" ")}
                            </p>
                        </div>

                        {/* Extra Information */}
                        <div className="mt-6 space-y-2 text-sm text-slate-300">
                            <p>
                                🌍 <span className="font-semibold">Language:</span>{" "}
                                {selectedMovieData.language}
                            </p>

                            <p>
                                📺 <span className="font-semibold">Type:</span>{" "}
                                {selectedMovieData.type}
                            </p>

                            <p>
                                📅 <span className="font-semibold">Premiered:</span>{" "}
                                {selectedMovieData.premiered}
                            </p>
                        </div>

                        {/* Button */}
                        <button
                            onClick={() => setClick(false)}
                            className="mt-7 w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
                        >
                            Close
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}