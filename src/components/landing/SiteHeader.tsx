import { brandAssets } from "./assets";

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="ByteSpace home">
      <img src={brandAssets.siteLogo} alt="ByteSpace" width="20" height="20" />
      <span>ByteSpace</span>
    </a>
  );
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Logo />
      <nav aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#creators">Creators</a>
      </nav>
      <div className="header-actions">
        <a href="/login">Sign In</a>
        <a href="/signup">Join Us</a>
        <button type="button" aria-label="Shopping bag">
          <img src={brandAssets.shoppingBag} alt="" width="18" height="18" />
        </button>
      </div>
    </header>
  );
}
