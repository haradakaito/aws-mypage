import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePageJP from "./pages/HomePageJP";
import HomePageEN from "./pages/HomePageEN";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/jp" />} />
        <Route path="/jp" element={<HomePageJP />} />
        <Route path="/en" element={<HomePageEN />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;