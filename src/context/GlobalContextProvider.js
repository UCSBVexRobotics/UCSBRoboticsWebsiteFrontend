import React from 'react';

const GlobalStateContext = React.createContext()
const GlobalDispatchContext = React.createContext()

const initialState = {
    authenticationKey: ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_AUTHENTICATION_KEY': {
            return {
                ...state,
                authenticationKey: state.authenticationKey
            }
        }
            break;
        default:
            throw new Error('Bad Action Type')
    }
}

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <GlobalStateContext.Provider value={state}><GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider></GlobalStateContext.Provider>
}

export default GlobalContextProvider;