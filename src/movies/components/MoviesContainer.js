import React from "react";
import {useSelector} from "react-redux";

const MoviesContainer = () => {

    const movies = useSelector(state => state.movies)

    return (
            <ul>
                {movies.movies.map((movie, index) => <li key={index}>{movie}</li>)}
            </ul>
        )
}


export default MoviesContainer