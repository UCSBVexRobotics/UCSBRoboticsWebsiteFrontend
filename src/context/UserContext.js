import React from "react"

const defaultState = {
    user: "",
    toggleUser: user => { },
}

const UserContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
    state = {
        user: "",
    }

    toggleDark = user => {
        localStorage.setItem("user", JSON.stringify(user))
        this.setState({ user })
    }

    componentDidMount() {
        //Getting user values from localStorage
        const currUser = JSON.parse(localStorage.getItem("user"))
        this.setState({ user: currUser });
    }

    render() {
        const { children } = this.props
        const { user } = this.state
        return (
            <UserContext.Provider
                value={{
                    user,
                    toggleUser: this.toggleUser,
                }}
            >
                {children}
            </UserContext.Provider>
        )
    }
}

export default UserContext

export { ThemeProvider }