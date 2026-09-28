"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b132b 0%, #1c2541 50%, #1f57ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Effects */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(200, 240, 0, 0.15) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(31, 87, 255, 0.3) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1080,
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 24,
          boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 620,
        }}
        className="auth-card-grid"
      >
        {/* Left Side: Brand Showcase */}
        <div
          style={{
            background: "linear-gradient(160deg, #1f57ff 0%, #153db8 100%)",
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            color: "white",
          }}
          className="auth-showcase"
        >
          <div>
            <Link
              href="/"
              id="login-logo-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  background: "#c8f000",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 20,
                  color: "#0d0d0d",
                }}
              >
                B
              </div>
              <span style={{ fontWeight: 800, fontSize: 24, color: "white", letterSpacing: "-0.5px" }}>
                ByteSpace
              </span>
            </Link>

            <h2
              style={{
                fontSize: 34,
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: 16,
                letterSpacing: "-0.5px",
              }}
            >
              Welcome back to <br />
              <span style={{ color: "#c8f000" }}>ByteSpace</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.6, maxWidth: 380 }}>
              Unlock access to expert-led tech courses, hands-on projects, and a community of 50,000+ ambitious learners.
            </p>
          </div>

          {/* Testimonial Snippet */}
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 16,
              padding: 20,
              marginTop: 32,
            }}
          >
            <div style={{ display: "flex", gap: 4, color: "#facc15", marginBottom: 8, fontSize: 14 }}>
              ★★★★★
            </div>
            <p style={{ fontSize: 14, fontStyle: "italic", lineHeight: 1.5, color: "#e0e7ff", marginBottom: 12 }}>
              "ByteSpace helped me double my income within 6 months. The courses are structured for real-world impact!"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#c8f000",
                  color: "#0d0d0d",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                }}
              >
                SJ
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: 14, margin: 0 }}>Sarah Johnson</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", margin: 0 }}>Product Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div
          style={{
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(15, 23, 42, 0.7)",
          }}
        >
          <div style={{ maxWidth: 400, width: "100%", margin: "0 auto" }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: "white", marginBottom: 8 }}>
              Sign In
            </h1>
            <p style={{ color: "#9ca3af", fontSize: 14, marginBottom: 32 }}>
              Enter your account credentials to continue learning.
            </p>

            {success ? (
              <div
                style={{
                  background: "rgba(34, 197, 94, 0.15)",
                  border: "1px solid rgba(34, 197, 94, 0.4)",
                  borderRadius: 12,
                  padding: 24,
                  textAlign: "center",
                  color: "#4ade80",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: "white" }}>
                  Signed In Successfully!
                </h3>
                <p style={{ fontSize: 14, color: "#cbd5e1", marginBottom: 20 }}>
                  Redirecting to your dashboard...
                </p>
                <Link
                  href="/"
                  className="btn-lime"
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {error && (
                  <div
                    style={{
                      background: "rgba(239, 68, 68, 0.15)",
                      border: "1px solid rgba(239, 68, 68, 0.4)",
                      color: "#fca5a5",
                      padding: "12px 16px",
                      borderRadius: 10,
                      fontSize: 14,
                    }}
                  >
                    {error}
                  </div>
                )}

                {/* Social Logins */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <button
                    type="button"
                    id="login-google-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "12px",
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 10,
                      color: "white",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    Google
                  </button>

                  <button
                    type="button"
                    id="login-github-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "12px",
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 10,
                      color: "white",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </button>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    margin: "8px 0",
                  }}
                >
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
                  <span style={{ color: "#6b7280", fontSize: 12, textTransform: "uppercase", letterSpacing: "1px" }}>
                    or email
                  </span>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="login-email" style={{ display: "block", color: "#d1d5db", fontSize: 14, fontWeight: 500, marginBottom: 8 }}>
                    Email Address
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 10,
                      color: "white",
                      fontSize: 15,
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <label htmlFor="login-password" style={{ color: "#d1d5db", fontSize: 14, fontWeight: 500 }}>
                      Password
                    </label>
                    <a href="#" style={{ color: "#c8f000", fontSize: 13, textDecoration: "none" }}>
                      Forgot password?
                    </a>
                  </div>
                  <div style={{ position: "relative" }}>
                    <input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px 42px 12px 16px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: 10,
                        color: "white",
                        fontSize: 15,
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        color: "#9ca3af",
                        cursor: "pointer",
                        fontSize: 13,
                      }}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Remember me */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <input
                    type="checkbox"
                    id="remember-me"
                    style={{ width: 16, height: 16, accentColor: "#c8f000", cursor: "pointer" }}
                  />
                  <label htmlFor="remember-me" style={{ color: "#9ca3af", fontSize: 14, cursor: "pointer" }}>
                    Remember me for 30 days
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="login-submit-btn"
                  disabled={isLoading}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: isLoading ? "#94a3b8" : "#c8f000",
                    color: "#0d0d0d",
                    border: "none",
                    borderRadius: 10,
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: isLoading ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    boxShadow: "0 4px 15px rgba(200, 240, 0, 0.3)",
                    marginTop: 8,
                  }}
                >
                  {isLoading ? "Signing in..." : "Sign In to ByteSpace"}
                </button>
              </form>
            )}

            <p style={{ textAlign: "center", color: "#9ca3af", fontSize: 14, marginTop: 28 }}>
              Don't have an account?{" "}
              <Link href="/signup" id="login-to-signup" style={{ color: "#c8f000", fontWeight: 600, textDecoration: "none" }}>
                Sign Up Free
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Responsive CSS */}
      <style>{`
        @media (max-width: 868px) {
          .auth-card-grid {
            grid-template-columns: 1fr !important;
          }
          .auth-showcase {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
