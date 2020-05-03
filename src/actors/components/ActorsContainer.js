import React from "react";
import {connect} from "react-redux";


const ActorsContainer = ({actors}) => {

    return (
        <ul>
            {actors.actors.map((actor, index) => <li key={index}>{actor}</li>)}
        </ul>
    )
}

const mapStateToProps = state => ({
    actors: state.actors
})

export default connect(mapStateToProps, {})(ActorsContainer)