import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './LoadingPage.css';

const LoadingPage = () => {
const navigate = useNavigate();

useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("hasVisited");

    if (!alreadyVisited) {
    sessionStorage.setItem("hasVisited", "true");

    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    fetch(`${baseUrl}/view`, { method: "POST" })
        .then(() => {
        console.log("POST complete");
        navigate("/jp", { replace: true });
        })
        .catch((err) => {
        console.error("POST failed", err);
        navigate("/jp", { replace: true });
        });
    } else {
    navigate("/jp", { replace: true });
    }
}, [navigate]);

return (
    <div className="loading-container">
    <h1>読み込み中...</h1>
    <p>ページを準備しています</p>
    <div className="spinner" />
    </div>
);
};

export default LoadingPage;