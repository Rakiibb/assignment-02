import { useEffect, useState } from "react"
import { GetSearchMovies } from "../services/getSearchMovie";
import { FaceSlightlyFrowning } from 'lucide-react';



export const AfterSearch = ({value, setClick, setSelectedMovieData}) => {

    const [movies, setMovies] = useState([]);



    useEffect(() => {
        
        const fetchMovies = async () => {
            const data = await GetSearchMovies(value);

            // console.log(data);
            setMovies(data);
            
           
        };
        fetchMovies();
    },[value])

    return(

        <>

        {movies.length === 0 ? (
            <div className="flex min-h-[50vh] items-center justify-center px-6">
                <div className="text-center">

                    <h2 className="text-2xl font-bold text-red-500">
                        No Movies Found 
                    </h2>
                    <span className="text-center"> <FaceSlightlyFrowning /> </span>

                    <p className="mt-2 text-slate-900">
                        We couldn't find any movie matching "{value}".
                    </p>
                </div>
            </div>
        ) : (
        
        <div className="grid grid-cols-2 gap-6 p-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

                    {movies.map((movie) => (

                        

                        <div
                            key={movie.id}
                            className="overflow-hidden rounded-xl bg-slate-800 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            {/* Movie Poster */}
                            <img
                                src={movie.show?.image?.medium}
                                alt={movie.title}
                                className="h-72 w-full object-cover"
                            />

                            {/* Movie Information */}
                            <div className="p-4">

                                <h2 className="truncate text-lg font-bold text-white">
                                    {movie.show?.name}
                                </h2>

                                <p className="mt-2 text-sm text-slate-400">
                                    ⭐ {movie.show?.rating?.average}
                                </p>

                                <p className="mt-1 text-sm text-slate-400">
                                    📅 {movie.show?.premiered}
                                </p>

                                <button className="mt-4 w-full rounded-lg bg-red-600 py-2 font-semibold text-white transition hover:bg-red-700"
                                onClick={() => {
        setClick(true);
        setSelectedMovieData(movie.show);
    }}>
                                
                                    View Details
                                </button>

                            </div>

                        </div>

                    ))}

                </div>
        )}
                </>
    )
}