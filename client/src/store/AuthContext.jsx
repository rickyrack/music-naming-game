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

    const register = async (email, password) => {
        console.log(email)
        console.log(password)
        try {
            return await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            navigate('/');
        }
        
    }

    const login = async (email, password) => {
        try {
            const signedIn = await signInWithEmailAndPassword(auth, email, password);
            return signedIn
        } catch (error) {
            navigate('/register');
        }
    }

    const logout = async () => {
        try {
            navigate('/');
            return await signOut(auth);
        } catch (error) {
            navigate('/');
        }

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