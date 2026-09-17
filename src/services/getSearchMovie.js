export const GetSearchMovies = async (searchValue) => {

    const url = `https://api.tvmaze.com/search/shows?q=${searchValue}`
    const data = await fetch(url);
    const json = await data.json()

    console.log(json)

    return (json)
}