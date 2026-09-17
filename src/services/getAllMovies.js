export const GetAllMovies = async () => {

    const url = `https://api.tvmaze.com/shows`
    const data = await fetch(url);
    const json = await data.json()

    return (json)
}