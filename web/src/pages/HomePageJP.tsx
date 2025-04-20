// src/pages/HomePageJP.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePageViews } from "../hooks/usePageViews";
import { Link } from "react-router-dom";

const HomePageJP = () => {
    const views = usePageViews();
    const navigate = useNavigate();

    // useEffect(() => {
    //     const hasVisited = sessionStorage.getItem("hasVisited");
    //     if (!hasVisited) {
    //         sessionStorage.setItem("hasVisited", "true");
    //         navigate("/", { replace: true });
    //     }
    // }, [navigate]);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisited");

        if (!hasVisited) {
            const baseUrl = process.env.REACT_APP_API_BASE_URL;

            fetch(`${baseUrl}/view`, { method: "POST" })
            .then(() => {
                console.log("ページビューを直接アクセスからカウントしました（JP）");
                sessionStorage.setItem("hasVisited", "true");
                navigate("/", { replace: true });
            })
            .catch((err) => {
                console.error("ページビューのカウントに失敗しました（JP）:", err);
                sessionStorage.setItem("hasVisited", "true");
                navigate("/", { replace: true });
            });
        }
    }, [navigate]);

    return (
        <div>
        <Header lang="jp" />

        <main>
            <h1>ホームページへようこそ</h1>
            <p>現在の閲覧数：{views !== null ? `${views} 回` : "取得中..."}</p>

            <Link to="/en">English version</Link>

            <section>
            <h2>学歴</h2>
            <p>ここに学歴を記述します。</p>
            </section>

            <section>
            <h2>お問い合わせ</h2>
            <p>お問い合わせフォームやメールアドレスを記述します。</p>
            </section>
        </main>

        <Footer lang="jp" />
        </div>
    );
};

export default HomePageJP;