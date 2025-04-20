import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePageJP from "./pages/HomePageJP";
import HomePageEN from "./pages/HomePageEN";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const hasVisitedThisTab = sessionStorage.getItem("hasVisited");

    if (!hasVisitedThisTab) {
      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      fetch(`${baseUrl}/view`, { method: "POST" })
        .then(() => {
          sessionStorage.setItem("hasVisited", "true");
        })
        .catch((err) => {
          console.error("Failed to update view count:", err);
        });
    }
  }, []);

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