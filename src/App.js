import React from "react";
import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";

import { movieActions} from "./movies/duck";

const store = createStore(rootReducer, composeWithDevTools());
window.store = store;

store.dispatch(movieActions.add("Romunualdo"))

class App extends React.Component {


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default App;
