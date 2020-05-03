import React from "react";
import {connect} from "react-redux";

const MoviesContainer = ({movies}) =>{
    return (
            <ul>
                {movies.movies.map((movie, index) => <li key={index}>{movie}</li>)}
            </ul>
        )
}


const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, {})(MoviesContainer)