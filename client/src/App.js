import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import DashBoard from "./pages/DashBoard";
import RoadMap from "./pages/RoadMap";
import Community from "./pages/Community";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
