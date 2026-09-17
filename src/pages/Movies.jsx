import {  useState } from "react"
import { BeforeSearch } from "../search/BeforeSearch";
import { AfterSearch } from "../search/AfterSearch";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { DetailModal } from "../detail-modal/DetailsModal";

export const Movies =  () => {

    const [click, setClick] = useState(false)
    const [selectedMovieData, setSelectedMovieData] =useState(null)

    console.log(click);

    const nevigate = useNavigate()

  const goToHome = () => {
    nevigate("/")
  }
    
    const [searchMovie, setSearchMovie] = useState("");
    const [value, setValue] = useState("")

    

    const handleSearch = (e) => {
        e.preventDefault();

        const value = searchMovie.trim();
        setValue(value);
        console.log(value);

        
    };

    
    // console.log(movies)
     
    return (
        <>
            <div>



                <nav className="flex items-center justify-between bg-slate-950 px-6 py-5 text-white md:px-12 lg:px-20">


                    <div className=" cursor-pointer text-2xl font-bold"
                    onClick={goToHome}>
                        🎬 MovieExplorer
                    </div>


                    <form className="flex items-center gap-2"
                         onSubmit={handleSearch}>

                        <input
                            type="text"
                            placeholder="🔍 Search for a movie..."
                            value={searchMovie}
                            onChange={(e)=>setSearchMovie(e.target.value)}
                            className="w-48 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white outline-none transition focus:border-red-500 md:w-72"
                        />

                        <button
                            type="submit"
                            className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700"
                        >
                            Search
                        </button>

                    </form>

                </nav>

            </div>

            {click && <DetailModal setClick={setClick} selectedMovieData={selectedMovieData} />}

            
                {value == "" ? (
    <BeforeSearch setClick={setClick} setSelectedMovieData={setSelectedMovieData}/>
) : (
    <AfterSearch value={value} setClick={setClick} setSelectedMovieData={setSelectedMovieData}/>
)}
            

           <Footer />

        </>
    )
}