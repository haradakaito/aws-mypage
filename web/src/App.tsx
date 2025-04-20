import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePageJP from "./pages/HomePageJP";
import HomePageEN from "./pages/HomePageEN";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (sessionStorage.getItem("hasVisited") === null) {
      sessionStorage.setItem("hasVisited", "true");
      const baseUrl = process.env.REACT_APP_API_BASE_URL;

      fetch(`${baseUrl}/view`, { method: "POST" })
        .catch((err) => {
          console.error("Failed to update view count:", err);
        });
    } else {
      console.log("View count not updated (already counted for this tab).");
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