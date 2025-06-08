// src/pages/HomePageEN.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { usePageViews } from "../hooks/usePageViews";
// import { Link } from "react-router-dom";
import "./HomePage.css"

const HomePageEN = () => {
    // const views = usePageViews();
    const navigate = useNavigate();

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisited");
        if (!hasVisited) {
            sessionStorage.setItem("hasVisited", "true");
            navigate("/", { replace: true });
        }
    }, [navigate]);

    return (
        <div>
        <Header lang="en" />

        <main>

            <div className="language-switch">
                <a href="/jp" className="lang-btn">
                    🌐 日本語
                </a>
            </div>

            <section>
            <h2>Work History</h2>
            <p>(Apr. 2026 – ) ???</p>
            </section>

            <section>
            <h2>Education</h2>
            <p>(Apr. 2020 – Mar. 2024) Shizuoka University, School of Informatics, Department of Computer Science</p>
            <p>(Apr. 2024 – Mar. 2026) Graduate School of Integrated Science and Technology, Department of Informatics, Shizuoka University</p>
            </section>

            <section>
            <h2>Awards</h2>
            <p>(Nov. 2024) Fujifilm Hackathon – Group Champion & Individual MVP</p>
            <p>(Oct. 2024) Outstanding Paper Award, DICOMO 2024</p>
            <p>(Jun. 2024) Best Presentation Award, DICOMO 2024</p>
            <p>(Mar. 2024) Student Encouragement Award, 86th IPSJ National Convention</p>
            <p>(Jan. 2024) International Patent Application</p>
            </section>

            <section>
            <h2>Conference Presentations</h2>
            <p>(Jun. 2024) Kaito Harada et al., "Preliminary Study on CSI-Based Localization System across Multiple Domains using Federated Learning", DICOMO2024</p>
            <p>(Mar. 2024) Kaito Harada et al., "Research on Human Passage Detection System using CSI with Nexmon", 86th IPSJ National Convention, 2024</p>
            <p>(Mar. 2024) Kaito Harada et al., "CSI-Based Smart Device State Estimation using Nexmon", DEIM2024</p>
            </section>

            <section>
            <h2>Patents</h2>
            <p>(Jan. 2024) Hiroshi Mineno, Kaito Harada, "Estimation System, Estimation Program, and Estimation Method" (Application No. 2024-010392, Filed: Jan. 26, 2024)</p>
            </section>

            <section>
            <h2>Certifications</h2>
            <p>
                (Jun. 2025) Fujitsu Professional Internship 2024
                <a
                    href="https://www.openbadge-global.com/ns/portal/openbadge/public/assertions/detail/YWovWWZmRFdpWEV3RWNCd3V4Y29zQT09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge-link"
                    >
                    🔗Certification Badge
                </a>
            </p>
            <p>(Oct. 2024) Yumemi Passport</p>
            <p>(Jul. 2024) TOEIC Score: 700</p>
            </section>

            <section>
            <h2>Internships</h2>
            <p>(Apr. 2025) Fujitsu Professional Internship (Paid, Onsite)</p>
            <p>(Nov. 2024) Fujifilm IT Internship Program (Hackathon-Style)</p>
            <p>(Sep. 2024) NAVITIME JAPAN – Engineering Experience Program</p>
            </section>

            <section>
                <h2>Projects</h2>
                <p>
                    (Apr. 2025) NFC-based Attendance Management System&nbsp;
                    <a
                    href="https://github.com/haradakaito/AttendanceManagementSystem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-link"
                    >
                    🔗GitHub
                    </a>
                </p>
                <p>
                    (Jul. 2024) Personal Portfolio (My Page)&nbsp;
                    <a
                    href="https://github.com/haradakaito/aws-mypage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-link"
                    >
                    🔗GitHub
                    </a>
                </p>
            </section>

            <section>
            <h2>Skills</h2>
            <div className="skills-grid">
                <span className="skill-badge">Python</span>
                <span className="skill-badge">AWS</span>
                <span className="skill-badge">React</span>
            </div>
            </section>

            <section>
                <h2>Articles</h2>
                <div className="article-list">

                    <div className="article-card">
                    <h3>[LaTeX] Operate Overleaf via VSCode!</h3>
                    <p className="article-meta">Published: April 11, 2024</p>
                    <p className="article-desc">Step-by-step instructions for integrating Overleaf with the VSCode development environment.</p>
                    <a
                        href="https://qiita.com/haradakaito/items/26ae779db23a1c862158"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-link"
                    >
                        📖 Read Article
                    </a>
                    </div>

                    <div className="article-card">
                    <h3>[Raspberry Pi] How to Set Up Nexmon</h3>
                    <p className="article-meta">Published: April 10, 2024</p>
                    <p className="article-desc">A complete guide to installing Nexmon on Raspberry Pi 3/4B and acquiring CSI data.</p>
                    <a
                        href="https://qiita.com/haradakaito/items/8e9ef1081b372509d4a1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-link"
                    >
                        📖 Read Article
                    </a>
                    </div>

                </div>
            </section>

        </main>

        <Footer lang="en" />
        </div>
    );
};

export default HomePageEN;