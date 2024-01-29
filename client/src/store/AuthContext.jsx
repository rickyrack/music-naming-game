import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../config/firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        try {
            const signedIn = signInWithEmailAndPassword(auth, email, password);
            return signedIn
        } catch (error) {
            navigate('/register');
        }
    }

    const logout = () => {
        return signOut(auth);
    }

    // check after page is rendered
    useEffect(() => {
      return auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
      });
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, register, loading }}>
            {children}
        </AuthContext.Provider>
    )
}