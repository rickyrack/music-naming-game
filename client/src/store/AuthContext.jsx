import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const register = async (email, password, username) => {
    if (user) {
      console.log("Error: User already signed in");
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(auth, email, password);
      const authUID = newUser.user.uid;
      const res = await api.post("/user/register", {
        email: email,
        username: username,
        authUID: authUID
      });
      navigate("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
      navigate("/");
    }
  };

  const login = async (username, password) => {
    if (user) return;
    let email;
    try {
      const res = await api.get("/user/login", {
        username: username
      });
      email = res.data.email;
    } catch (error) {
      console.log(`Error: ${error.message}`);
      return false;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      return false;
    }
  };

  const logout = async () => {
    try {
      navigate("/");
      await signOut(auth);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      navigate("/");
    }
  };

  // check after page is rendered
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return <AuthContext.Provider value={{ user, login, logout, register, loading }}>{children}</AuthContext.Provider>;
};
