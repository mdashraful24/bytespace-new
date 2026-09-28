"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!fullName || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!agreed) {
      setError("Please accept the Terms of Service to continue.");
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
      {/* Background Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: 550,
          height: 550,
          background: "radial-gradient(circle, rgba(200, 240, 0, 0.18) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(31, 87, 255, 0.35) 0%, rgba(0,0,0,0) 70%)",
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
          minHeight: 680,
        }}
        className="auth-card-grid"
      >
        {/* Left Side: Features & Value Prop */}
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
              id="signup-logo-link"
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
              Start learning <br />
              for <span style={{ color: "#c8f000" }}>free today</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.6, maxWidth: 380, marginBottom: 32 }}>
              Create your account to unlock free course previews, downloadable code templates, and interactive coding exercises.
            </p>

            {/* Benefit Checkmarks */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Access to 50+ industry-vetted courses",
                "Certificates of completion",
                "Direct instructor Q&A support",
                "Lifetime access to course materials",
              ].map((benefit, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#c8f000",
                      color: "#0d0d0d",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: 12,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 500, color: "#e0e7ff" }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
              Joined by students from Google, Meta, Microsoft, and 1,000+ top tech companies.
            </p>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div
          style={{
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(15, 23, 42, 0.7)",
          }}
        >
          <div style={{ maxWidth: 420, width: "100%", margin: "0 auto" }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: "white", marginBottom: 8 }}>
              Create Account
            </h1>
            <p style={{ color: "#9ca3af", fontSize: 14, marginBottom: 28 }}>
              Join ByteSpace and start building your future in tech.
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
                <div style={{ fontSize: 40, marginBottom: 12 }}>🚀</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: "white" }}>
                  Account Created Successfully!
                </h3>
                <p style={{ fontSize: 14, color: "#cbd5e1", marginBottom: 20 }}>
                  Welcome to ByteSpace! Check your email to verify your account.
                </p>
                <Link
                  href="/login"
                  className="btn-lime"
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Proceed to Sign In
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
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

                {/* Role Switcher */}
                <div>
                  <label style={{ display: "block", color: "#d1d5db", fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
                    I want to join as:
                  </label>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                      background: "rgba(255,255,255,0.05)",
                      padding: 4,
                      borderRadius: 10,
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setRole("student")}
                      style={{
                        padding: "8px 12px",
                        borderRadius: 8,
                        border: "none",
                        background: role === "student" ? "#c8f000" : "transparent",
                        color: role === "student" ? "#0d0d0d" : "#9ca3af",
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      🎓 Learner
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole("instructor")}
                      style={{
                        padding: "8px 12px",
                        borderRadius: 8,
                        border: "none",
                        background: role === "instructor" ? "#c8f000" : "transparent",
                        color: role === "instructor" ? "#0d0d0d" : "#9ca3af",
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      👨‍🏫 Instructor
                    </button>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="signup-name" style={{ display: "block", color: "#d1d5db", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
                    Full Name
                  </label>
                  <input
                    id="signup-name"
                    type="text"
                    placeholder="Alex Morgan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 16px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 10,
                      color: "white",
                      fontSize: 14,
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="signup-email" style={{ display: "block", color: "#d1d5db", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
                    Email Address
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 16px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 10,
                      color: "white",
                      fontSize: 14,
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="signup-password" style={{ display: "block", color: "#d1d5db", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
                    Password
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "11px 42px 11px 16px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: 10,
                        color: "white",
                        fontSize: 14,
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
                        fontSize: 12,
                      }}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: 4 }}>
                  <input
                    type="checkbox"
                    id="terms-agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    style={{ width: 16, height: 16, marginTop: 2, accentColor: "#c8f000", cursor: "pointer" }}
                  />
                  <label htmlFor="terms-agree" style={{ color: "#9ca3af", fontSize: 13, lineHeight: 1.4, cursor: "pointer" }}>
                    I agree to the{" "}
                    <a href="#" style={{ color: "#c8f000", textDecoration: "none" }}>Terms of Service</a> and{" "}
                    <a href="#" style={{ color: "#c8f000", textDecoration: "none" }}>Privacy Policy</a>.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="signup-submit-btn"
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
                  {isLoading ? "Creating Account..." : "Create Free Account"}
                </button>
              </form>
            )}

            <p style={{ textAlign: "center", color: "#9ca3af", fontSize: 14, marginTop: 24 }}>
              Already have an account?{" "}
              <Link href="/login" id="signup-to-login" style={{ color: "#c8f000", fontWeight: 600, textDecoration: "none" }}>
                Sign In
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
