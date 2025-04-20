// src/components/Footer.tsx
type FooterProps = {
    lang: 'jp' | 'en';
};
const Footer = ({ lang }: FooterProps) => {
    const copyright =
    lang === 'jp' ? '© 2025 原田 海斗 All Rights Reserved.' : '© 2025 Kaito Harada All Rights Reserved.';

    return (
    <footer>
        <p>{copyright}</p>
    </footer>
    );
};
export default Footer;