// src/pages/HomePageEN.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePageViews } from "../hooks/usePageViews";
import { Link } from "react-router-dom";

const HomePageEN = () => {
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

            // POSTでカウント
            fetch(`${baseUrl}/view`, { method: "POST" })
            .then(() => {
                console.log("Page view incremented from direct access (EN)");
                sessionStorage.setItem("hasVisited", "true");
                // navigate("/", { replace: true });
            })
            .catch((err) => {
                console.error("Failed to increment view count (EN):", err);
                sessionStorage.setItem("hasVisited", "true");
                // navigate("/", { replace: true });
            });
        }
    }, [navigate]);

    const views = usePageViews();

    return (
        <div>
        <Header lang="en" />

        <main>
            <h1>Welcome to the Home Page</h1>
            <p>Page Views: {views !== null ? views : "Loading..."}</p>

            <Link to="/jp">日本語版</Link>

            <section>
            <h2>Education</h2>
            <p>Education details go here.</p>
            </section>

            <section>
            <h2>Contact</h2>
            <p>Include your email or contact form here.</p>
            </section>
        </main>

        <Footer lang="en" />
        </div>
    );
};

export default HomePageEN;