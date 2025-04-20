// src/pages/HomePageJP.tsx
import { Link } from "react-router-dom";

const HomePageJP = () => {
    return (
        <div>
        <h1>ホームページへようこそ</h1>
        <Link to="/en">English version</Link>
        </div>
    );
};

export default HomePageJP;
