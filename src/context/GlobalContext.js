import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    users: [
        {
            id: 1,
            firstname: 'one',
            lastname: 'One',
            email: 'one@gmail.com',
            mobile: '0123456789'
        }
    ]
};

export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={{
            users: state.users
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
