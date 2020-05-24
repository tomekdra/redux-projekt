import React from "react";
import {useDispatch} from "react-redux";
import actions from '../duck/actions'


const MoviesForm = (props) => {

    const movieInput = React.createRef();

    const dispatch = useDispatch();

    const addMovie = (event) => {
        event.preventDefault()
        dispatch(actions.add(movieInput.current.value))
        movieInput.current.value = ''
    }

    return <form onSubmit={addMovie}>
        <input type="text" ref={movieInput}/>
        <button type="submit">Add movie</button>
    </form>
}

export default MoviesForm