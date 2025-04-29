// src/components/Header.tsx
import "./Header.css";

type HeaderProps = {
    lang: 'jp' | 'en';
};
const Header = ({ lang }: HeaderProps) => {
    const name        = lang === 'jp' ? '原田 海斗' : 'Kaito Harada';
    const affiliation = lang === 'jp' ? '静岡大学大学院 修士2年' : "Shizuoka University Graduate School, Master's 2nd year.";

    return (
        <header>
            <div>
            <img src="/assets/myface.png" alt="My Face" width="80" height="80" />
            </div>
            <div>
            <h1>{name}</h1>
            <p>{affiliation}</p>
            </div>
            <div>
            <a href="https://github.com/haradakaito" target="_blank" rel="noopener noreferrer">
                <img src="/assets/github.png" alt="GitHub" width="24" height="24" />
            </a>
            <a href="https://qiita.com/haradakaito" target="_blank" rel="noopener noreferrer">
                <img src="/assets/qiita.png" alt="Qiita" width="24" height="24" />
            </a>
            <a href="https://www.linkedin.com/in/haradakaito/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.png" alt="LinkedIn" width="24" height="24" />
            </a>
            </div>
        </header>
    );
};
export default Header;