import React from "react";
import {connect} from "react-redux";
import actions from "../duck/actions";

const ActorsForm = (props) => {

    const inputActors = React.createRef();

    const addActor = event => {
        event.preventDefault()
        props.add(inputActors.current.value)
        inputActors.current.value = ''
    }

    return <form onSubmit={addActor}>
        <input type="text" ref={inputActors} />
        <button type="submit">Dodaj aktora</button>
    </form>
}

const mapDispatchToProps = dispatch => ({
    add: actor => dispatch(actions.add(actor))
}
)
export default connect(null, mapDispatchToProps)(ActorsForm)