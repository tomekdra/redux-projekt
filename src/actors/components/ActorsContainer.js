import React from "react";
import {useSelector} from "react-redux";


const ActorsContainer = () => {

    const actors = useSelector(state => state.actors);

    return (
        <ul>
            {actors.actors.map((actor, index) => <li key={index}>{actor}</li>)}
        </ul>
    )
}


export default ActorsContainer