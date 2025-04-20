import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePageJP from "./pages/HomePageJP";
import HomePageEN from "./pages/HomePageEN";
import { useEffect } from "react";

const App = () => {
  // Update view count on component mount
  useEffect(() => {
    // const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const baseUrl = "https://dkv4lu7awj.execute-api.ap-northeast-1.amazonaws.com/v1"
    fetch(`${baseUrl}/view`, { method: "POST" }).catch((error) =>
      console.error("View count update failed:", error)
    );
  }, []);
  // Set the document title
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