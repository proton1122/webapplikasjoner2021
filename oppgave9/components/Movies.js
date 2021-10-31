import { useEffect } from "react"
import Movie from "./Movie"

export default function Movies( {movies} ) {

    return(
        <section className="movies">
            {movies?.length > 0
            ? movies.map((movie) => (
                <Movie key={movie.title} movie={movie} />
                ))
            : null}
        </section>
    )
}