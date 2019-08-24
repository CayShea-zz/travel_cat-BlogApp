//Reusable Context file, so that I can make other instances of context with DRY code
import React, { useReducer } from 'react';

export default (reducer, helperFunction, initialState) => {
    //object to initiate my provider component
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const boundhelperFunctions = {};
        for (let key in helperFunction) {
            boundhelperFunctions[key] = helperFunction[key](dispatch);
        }

        return(
            <Context.Provider value={{ state, ...boundhelperFunctions }}>
                { children }
            </Context.Provider>
        )
    }

    return { Context, Provider}
};
