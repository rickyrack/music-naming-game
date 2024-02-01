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
import Register from "./views/Register/index.jsx";

function App() {
  const { loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<ProtectedRoute Component={Play} />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ranked" element={<ProtectedRoute Component={Ranked} />} />
        <Route path="/casual" element={<ProtectedRoute Component={Casual} />} />
        <Route path="/practice" element={<ProtectedRoute Component={Practice} />} />
        <Route path="/profile" element={<ProtectedRoute Component={Profile} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
