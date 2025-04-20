// src/pages/HomePageEN.tsx
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePageViews } from "../hooks/usePageViews";
import { Link } from "react-router-dom";

const HomePageEN = () => {
    const views = usePageViews();

    useEffect(() => {
        const key = "hasVisitedEN";
        if (!sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, "true");

            const baseUrl = process.env.REACT_APP_API_BASE_URL;
            fetch(`${baseUrl}/view`, { method: "POST" })
            .then(() => console.log("View count incremented (EN page)"))
            .catch((err) => console.error("Failed to increment view:", err));
        }
    }, []);

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