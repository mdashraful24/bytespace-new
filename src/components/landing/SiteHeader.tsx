import { brandAssets } from "./assets";

function Logo() {
  return (
    <a href="/" className="logo" aria-label="ByteSpace home">
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
        <span className="nav-item text-white">Home</span>
        <span className="nav-item text-gray-200">Courses</span>
        <span className="nav-item text-gray-200">Creators</span>
      </nav>
      <div className="header-actions text-gray-200">
        <a href="/login">Sign In</a>
        <a href="/signup">Join Us</a>
        <button type="button" aria-label="Shopping bag">
          <img src={brandAssets.shoppingBag} alt="" width="18" height="18" />
        </button>
      </div>
    </header>
  );
}
