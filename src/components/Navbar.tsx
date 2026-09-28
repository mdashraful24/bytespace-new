"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(26, 70, 224, 0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        <div className="container-bs" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <Link href="/" id="logo-link" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div
              style={{
                width: 36,
                height: 36,
                background: "#c8f000",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 16,
                color: "#0d0d0d",
                flexShrink: 0,
              }}
            >
              B
            </div>
            <span style={{ fontWeight: 800, fontSize: 20, color: "white", letterSpacing: "-0.5px" }}>
              ByteSpace
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
            <Link href="/#home" id="nav-home" className="nav-link">Home</Link>
            <Link href="/#courses" id="nav-courses" className="nav-link">Courses</Link>
            <Link href="/#creators" id="nav-creators" className="nav-link">Creators</Link>
            <Link href="/#about" id="nav-about" className="nav-link">About</Link>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-nav">
            <Link href="/login" id="signin-btn" className="btn-outline-white" style={{ padding: "10px 20px", fontSize: 14 }}>
              Sign In
            </Link>
            <Link href="/signup" id="signup-btn" className="btn-lime" style={{ padding: "10px 20px", fontSize: 14 }}>
              Sign Up Free
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
            className="mobile-hamburger"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "white",
            }}
            aria-label="Open menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "linear-gradient(140deg, #1236d4, #1a56ff)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 32,
          }}
        >
          <button
            id="close-menu-btn"
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              padding: 8,
            }}
            aria-label="Close menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {["Home", "Courses", "Creators", "About"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              id={`mobile-nav-${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "white",
                fontSize: 28,
                fontWeight: 700,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {item}
            </Link>
          ))}
          <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
            <Link href="/login" className="btn-outline-white" onClick={() => setMobileOpen(false)}>Sign In</Link>
            <Link href="/signup" className="btn-lime" onClick={() => setMobileOpen(false)}>Sign Up Free</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
