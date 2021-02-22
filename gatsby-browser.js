import React from "react"

import { UserProvider } from "./src/context/UserContext"

// highlight-start
export const wrapRootElement = ({ element }) => (
    <UserProvider>{element}</UserProvider>
)
// highlight-end