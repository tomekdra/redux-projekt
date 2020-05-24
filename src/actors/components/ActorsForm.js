import React from "react";
import { useDispatch } from "react-redux";
import actions from "../duck/actions";

const ActorsForm = (props) => {

    const inputActors = React.createRef();
    const dispatch = useDispatch();

    const addActor = event => {
        event.preventDefault()
        dispatch(actions.add(inputActors.current.value))
        inputActors.current.value = ''
    }

    return <form onSubmit={addActor}>
        <input type="text" ref={inputActors} />
        <button type="submit">Dodaj aktora</button>
    </form>
}


export default ActorsForm