import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Play from "./views/Play";
import Error from "./views/Error";
import HowTo from "./views/HowTo";
import Casual from "./views/Casual";
import Ranked from "./views/Ranked";
import Practice from "./views/Practice";
import Profile from "./views/Profile";
import Loading from "./views/Loading";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useAuth } from "./store/AuthContext.jsx";
import Login from "./views/Home/Statusboard/Login/index.jsx";
import Register from "./views/Register/index.jsx";

function App() {
  const { loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<ProtectedRoute component={Play} />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ranked" element={<ProtectedRoute component={Ranked} />} />
        <Route path="/casual" element={<ProtectedRoute component={Casual} />} />
        <Route path="/practice" element={<ProtectedRoute component={Practice} />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
