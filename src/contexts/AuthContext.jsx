import React from 'react'

function getInitialUser() {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : {}
}

function getInitialToken() {
  const token = localStorage.getItem('access')
  return token ? JSON.parse(token) : ''
}

const AuthController = () => {
  const [user, setUser] = React.useState(getInitialUser())
  const [token, setToken] = React.useState(getInitialToken())

  return {
    user,
    token,
    setUser,
    setToken,
  }
}

const AuthContext = React.createContext({
  user: {},
  token: '',
  setUser: () => {},
  setToken: () => {},
})

export const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={AuthController()}>{children}</AuthContext.Provider>
}

export const useAuth = () => React.useContext(AuthContext)
