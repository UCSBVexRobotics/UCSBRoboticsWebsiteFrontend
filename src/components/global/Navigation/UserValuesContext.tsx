import React, { useState, createContext } from "react"

export const UserValuesContext = createContext(null)

type UserValues = {
  firstName: string
  lastName: string
  email: string
  password: string
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const UserValues = ({ children }: Props) => {
  const [userValues, setUserValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const updateUserValues = (newValues: UserValues) => {
    setUserValues({ ...userValues, ...newValues })
  }

  return (
    <UserValuesContext.Provider value={[userValues, updateUserValues]}>
      {children}
    </UserValuesContext.Provider>
  )
}
