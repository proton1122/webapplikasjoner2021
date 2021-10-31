export default function Movie( { movie } ) {

    return (
        <div id="movie-component">
            <h3 id="movie-title">{movie.title}</h3>
            <p id="movie-description">{movie.description}</p>
        </div>
    )
}