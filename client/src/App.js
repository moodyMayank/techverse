import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import axios from "axios";
import Layout from "./Layout";
import DashBoard from "./pages/DashBoard";
import RoadMap from "./pages/RoadMap";
import ChallengePage from "./pages/ChallengePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UploadPage from "./pages/UploadPage";

axios.defaults.baseURL = "http://localhost:4000";

// To set cookies
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/challenges" element={<ChallengePage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
