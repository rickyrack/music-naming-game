import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);

    const login = () => {

    }

    const logout = () => {

    }

    useEffect(() => {
      //const jwt =
    
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}