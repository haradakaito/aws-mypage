// src/pages/HomePageJP.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { usePageViews } from "../hooks/usePageViews";
// import { Link } from "react-router-dom";
import "./HomePage.css"

const HomePageJP = () => {
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
        <Header lang="jp" />

        <main>
            <div className="language-switch">
                <a href="/en" className="lang-btn">
                    🌐 English
                </a>
            </div>

            <section>
            <h2>学歴</h2>
            <p>（2017.04-2020.03）富山県立 大門高等学校 普通科 情報コース</p>
            <p>（2020.04-2024.03）静岡大学 情報学部 情報科学科</p>
            <p>（2024.04-2026.03）静岡大学大学院 総合科学技術研究科 情報学専攻</p>
            </section>

            <section>
            <h2>業績</h2>
            <p>（2024.11）富士フイルム株式会社 ハッカソン グループ優勝・個人MVP</p>
            <p>（2024.10）DICOMO2024 優秀論文賞</p>
            <p>（2024.06）DICOMO2024 優秀プレゼンテーション賞</p>
            <p>（2024.03）情報処理学会第86回全国大会 学生奨励賞</p>
            <p>（2024.01）国際特許出願</p>
            </section>

            <section>
            <h2>学会発表</h2>
            <p>（2024.06）原田海斗, 他: "連合学習を用いた複数ドメインにまたがるCSIベースの位置推定システムに関する初期検討", マルチメディア、分散、協調とモバイル(DICOMO2024), 2024.</p>
            <p>（2024.03）原田海斗, 他: "NexmonによるCSIを用いた人物通過検出システムに関する研究", 情報処理学会第86回全国大会, 2024.</p>
            <p>（2024.03）原田海斗, 他: "NexmonによるCSIベースのスマートデバイス状態推定", データ工学と情報マネジメントに関するフォーラム(DEIM2024), 2024.</p>
            </section>

            <section>
            <h2>特許</h2>
            <p>（2024.01）峰野博史, 原田海斗「推定システム、推定プログラム、および推定方法」（出願番号：2024-010392，出願日：2024.1.26）</p>
            </section>

            <section>
            <h2>資格</h2>
            <p>（2024.10）ゆめみパスポート</p>
            <p>（2024.07）TOEIC 700</p>
            </section>

            <section>
            <h2>インターンシップ</h2>
            <p>（2025.04）富士通株式会社 Fujitsu Professional Internship【職場受入型・有償】</p>
            <p>（2024.11）富士フイルム株式会社 情報系インターンシップ（体験型ハッカソン）</p>
            <p>（2024.09）株式会社ナビタイムジャパン エンジニア体験</p>
            </section>

            <section>
                <h2>制作物</h2>
                <p>
                    （2025.04）カードリーダー式勤怠管理システム
                    <a
                    href="https://github.com/haradakaito/AttendanceManagementSystem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-link"
                    >
                    🔗 GitHub
                    </a>
                </p>
                <p>
                    （2024.07）マイページ
                    <a
                    href="https://github.com/haradakaito/aws-mypage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-link"
                    >
                    🔗 GitHub
                    </a>
                </p>
            </section>

            <section>
            <h2>スキル</h2>
            <div className="skills-grid">
                <span className="skill-badge">Python</span>
                <span className="skill-badge">AWS</span>
                <span className="skill-badge">React</span>
            </div>
            </section>

            <section>
            <h2>投稿記事</h2>
            <div className="article-list">

                <div className="article-card">
                    <h3>【選考体験記】AWSから内定をもらうまでの全過程</h3>
                    <p className="article-meta">投稿日：2025年04月20日</p>
                    <p className="article-desc">新卒でAWSに内定を獲得するまでの全過程について解説</p>
                    <a
                        href="https://note.com/maronist/n/n1a3952a76c88"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-link"
                    >
                        📖 記事を読む
                    </a>
                </div>

                <div className="article-card">
                    <h3>【LaTeX】VSCodeでOverleafを操作しよう！</h3>
                    <p className="article-meta">投稿日：2024年04月11日</p>
                    <p className="article-desc">統合開発環境「VSCode」で「Overleaf」を操作できるようにする手順を説明</p>
                    <a
                        href="https://qiita.com/haradakaito/items/26ae779db23a1c862158"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-link"
                    >
                        📖 記事を読む
                    </a>
                </div>

                <div className="article-card">
                    <h3>【Raspberry Pi】Nexmon環境構築手順</h3>
                    <p className="article-meta">投稿日：2024年04月10日</p>
                    <p className="article-desc">Raspberry Pi 3/4BにNexmonをインストールし，実際にCSIを取得するまでの一連の流れを説明</p>
                    <a
                        href="https://qiita.com/haradakaito/items/8e9ef1081b372509d4a1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-link"
                    >
                        📖 記事を読む
                    </a>
                </div>
            </div>
            </section>

        </main>

        <Footer lang="jp" />
        </div>
    );
};

export default HomePageJP;