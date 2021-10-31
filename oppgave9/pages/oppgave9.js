import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import Wrapper from "../components/Wrapper"
import Movie from "../components/Movie"
import Movies from "../components/Movies"

export default function Oppgave9() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [movieTitle, setMovieTitle] = useState("")
    const [movie, setMovie] = useState({})


    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const res = await axios.get('/api/movies')
        setMovies(res.data)
    }

    const handleAddMovieSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('/api/movies', { title, description, method:"addMovie" })
        
        setMovies(res.data)
    }

    const handleGetMovieSubmit = async (e) => {
        e.preventDefault()
        
        const res = await axios.post('/api/movies', { movieTitle, method:"getMovie" })
      
        if(res != null) {
            setMovie(res.data)
        }
        console.log("hello")
        console.log(res.data)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return(
        <div id="wrap">
            <Wrapper id="header">
                <Link id="return-link" href="/">
                    <a>Previous Page</a>
                </Link>
                <h1 id="header-title">Oppgave 9</h1>
            </Wrapper>

            <Wrapper id="row">
                <Wrapper id="add-movie-wrapper">
                    <h3>Add movie</h3>

                    <form className="form" onSubmit={handleAddMovieSubmit}>
                        <label htmlFor="title">Title:</label>
                        <input 
                            id="title"
                            type="text"
                            name="movieTitle"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="movieDescription"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <button type="submit">Submit</button>
                    </form>
                </Wrapper>

                <Wrapper id="all-movies-wrapper">
                    <h2>Movies:</h2>
                    <Movies movies={movies} />
                </Wrapper>

                <Wrapper id="one-movie-wrapper">
                    <h3>Get Movie</h3>
                    <form className="form" onSubmit={handleGetMovieSubmit}>
                        <label htmlFor="getOneMovie">Movie Title:</label>
                        <input 
                            id="getOneMovie"
                            type="text"
                            name="getOneMovie"
                            value={movieTitle}
                            onChange={(e) => setMovieTitle(e.target.value)}
                        />
                        <button type="submit">Get Movie</button>
                    </form>

                    {movie != null ? <Movie movie={movie} /> : null }

                </Wrapper>
            </Wrapper>


        </div>
    )
}
