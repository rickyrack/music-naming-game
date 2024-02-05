import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const register = async (email, password, username) => {
        if (user) {
            console.log('Error: User already signed in')
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(auth, email, password);
            const res = await api.post('/user/register', {
                email,
                username
            });
            navigate('/');
            return;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
        
    }

    const login = async (email, password) => {
        if (user) return;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const res = await api.post('/user/login', {
                email,
                password
            });
            return;
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