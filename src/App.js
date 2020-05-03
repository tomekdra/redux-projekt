import React from "react";
import MoviesContainer from "./movies/components/MoviesContainer";
import MoviesForm from "./movies/components/MoviesForm";
import ActorsContainer from "./actors/components/ActorsContainer";
import ActorsForm from "./actors/components/ActorsForm";



class App extends React.Component {


    render() {
        return (
            <div>
                <MoviesForm/>
               <MoviesContainer/>
               <div>##############</div>
                <ActorsForm />
                <ActorsContainer />
            </div>
        );
    }
}

export default App;
