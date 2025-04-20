// src/pages/LoadingPage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        // 初回以外は直接/jpへ
        sessionStorage.setItem("hasVisited", "true");
        navigate("/jp", { replace: true });
        }
    }, [navigate]);

    return (
        <div>
        <h1>読み込み中...</h1>
        <p>ページを準備しています</p>
        </div>
    );
};

export default LoadingPage;