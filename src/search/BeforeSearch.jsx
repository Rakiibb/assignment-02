import { useEffect, useState } from "react"
import { GetAllMovies } from "../services/getAllMovies"


export const BeforeSearch = ({setClick, setSelectedMovieData}) => {

    const [movies, setMovies] = useState([]);



    useEffect(() => {
        
        const fetchMovies = async () => {
            const data = await GetAllMovies();

            // console.log(data);
            setMovies(data);
            
           
        };
        fetchMovies();
    },[])

    return(
        <div className="grid grid-cols-2 gap-6 p-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

                    {movies.map((movie) => (
                        

                        <div
                            key={movie.id}
                            className="overflow-hidden rounded-xl bg-slate-800 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            {/* Movie Poster */}
                            <img
                                src={movie.image.medium}
                                alt={movie.title}
                                className="h-72 w-full object-cover"
                            />

                            {/* Movie Information */}
                            <div className="p-4">

                                <h2 className="truncate text-lg font-bold text-white">
                                    {movie.name}
                                </h2>

                                <p className="mt-2 text-sm text-slate-400">
                                    ⭐ {movie.rating.average}
                                </p>

                                <p className="mt-1 text-sm text-slate-400">
                                    📅 {movie.premiered}
                                </p>

                                <button className="mt-4 w-full rounded-lg bg-red-600 py-2 font-semibold text-white transition hover:bg-red-700"
                                onClick={() => {setClick(true)
                                    setSelectedMovieData(movie)
                                }}>
                                    View Details
                                </button>

                            </div>

                        </div>

                    ))}

                </div>
    )
}