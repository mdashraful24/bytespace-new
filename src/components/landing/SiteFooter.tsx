import { brandAssets } from "./assets";

const linkColumns = [
    [
        { label: "Featured Courses", href: "#" },
        { label: "Featured Categories", href: "#" },
        { label: "Business", href: "#" },
        { label: "IT", href: "#" },
        { label: "Design", href: "#" },
    ],
    [
        { label: "Development", href: "#" },
        { label: "Marketing", href: "#" },
        { label: "Photography", href: "#" },
        { label: "Finance", href: "#" },
        { label: "Sport", href: "#" },
    ],
    [
        { label: "Become a Creator", href: "#" },
        { label: "Affiliate Program", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Help", href: "#" },
        { label: "About", href: "#" },
    ],
];

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <div className="site-footer__brand-block">
                    <div className="site-footer__logo">
                        <a href="/" className="logo" aria-label="ByteSpace home">
                            <img src={brandAssets.siteLogo} alt="ByteSpace" width="24" height="24" />
                            <span>ByteSpace</span>
                        </a>
                    </div>

                    <p>
                        Stay up to date with our latest features and releases by joining our
                        newsletter.
                    </p>

                    <div className="site-footer__form">
                        <input
                            className="site-footer__input"
                            type="email"
                            aria-label="Enter your email"
                            placeholder="Enter your email"
                        />
                        <button className="site-footer__button" type="button">
                            Search
                        </button>
                    </div>

                    <small>
                        By subscribing, you agree to our Privacy Policy and consent to
                        receive updates from our company.
                    </small>
                </div>

                <div className="site-footer__links">
                    {linkColumns.map((column, index) => (
                        <ul key={String(index)} className="site-footer__list">
                            {column.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>

            <div className="site-footer__bottom">
                <span>© 2023 ByteSpace. All rights reserved.</span>

                <div className="site-footer__legal">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
        </footer>
    );
}
