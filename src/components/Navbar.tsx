export default function Navbar() {
  return (
    <nav className="max-w-full h-256"
      style={{
        backgroundColor: "#003BE2",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
        `,
        backgroundSize: "70px 70px",
      }}>
      <div
        className="max-w-[1440] mx-auto flex justify-between items-center px-4 py-6 text-white"
      >
        <div className="flex items-center gap-1">
          <img src="/logo.png" alt="Logo" className="w-5 h-5" />
          <h1>ByteSpace</h1>
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <p className="text-white">Home</p>
          <p>Courses</p>
          <p>Creators</p>
        </div>

        <div className="flex items-center gap-6 text-gray-300">
          <p>Sign In</p>
          <p>Join Us</p>
          <img src="/cart.png" alt="cart" className="w-4 h-5" />
        </div>
      </div>
    </nav>
  );
}