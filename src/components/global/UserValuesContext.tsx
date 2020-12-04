import React, { useState, createContext } from "react";

export const UserValuesContext = createContext(null);

export const UserValues = (props) => {
    const [userValues, setUserValues] = useState({
        firstName: "", 
        lastName: "", 
        email: "", 
        password: ""
      })

    const updateUserValues = (newValues) => {
        setUserValues({...userValues, ...newValues});
    }

    return <UserValuesContext.Provider value={[userValues, updateUserValues]}>
        {props.children}
    </UserValuesContext.Provider>
}