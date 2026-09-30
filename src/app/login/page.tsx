"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import "../auth.css";
import "./login.css";
import { brandAssets } from "@/components/landing/assets";

const assets = {
    digital: "/images/landing/card2.png",
    bigData: "/images/landing/card1.png",
    triangle: "/images/landing/shape10.png",
    scribble: "/images/landing/shape2.png",
    students: "/images/landing/stat-card3.png",
    shape16: "/images/landing/shape16.png",
    facebook: "/images/landing/facebook.png",
    google: "/images/landing/google.png",
};

export default function LoginPage() {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <main className="login-page">
            <div className="login-grid" aria-hidden="true" />
            <div className="login-inner">
                <section className="login-promo" aria-labelledby="login-promo-title">
                    <img src={brandAssets.siteLogo} alt="ByteSpace" width="24" height="24" />
                    <div className="login-copy">
                        <h1 id="login-promo-title">Sign in with ease</h1>
                        <p>
                            Experience a seamless and efficient sign-in process that grants
                            you instant access to a world of knowledge.
                        </p>
                    </div>
                    <div className="login-collage" aria-hidden="true">
                        <Image
                            className="login-card login-card-back"
                            src={assets.digital}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                        <Image
                            className="login-card login-card-front"
                            src={assets.bigData}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                        <Image
                            className="login-triangle"
                            src={assets.triangle}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                        <Image
                            className="login-shape16"
                            src={assets.shape16}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                        <Image
                            className="login-scribble"
                            src={assets.scribble}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                        <Image
                            className="login-students"
                            src={assets.students}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                    </div>
                </section>

                <section className="login-panel" aria-labelledby="welcome-back-title">
                    <p className="login-eyebrow">Sign In</p>
                    <h2 id="welcome-back-title">Welcome Back</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email
                            <input
                                name="email"
                                type="email"
                                placeholder="designer@example.com"
                                autoComplete="email"
                            />
                        </label>
                        <label>
                            Password
                            <input
                                name="password"
                                type="password"
                                placeholder="*********"
                                autoComplete="current-password"
                            />
                        </label>
                        <button type="submit">Sign In</button>
                    </form>
                    <div className="login-divider">
                        <span>or</span>
                    </div>
                    <div className="login-socials">
                        <button type="button" aria-label="Continue with Facebook">
                            <Image
                                src={assets.facebook}
                                alt=""
                                width={44}
                                height={44}
                            />
                        </button>
                        <button type="button" aria-label="Continue with Google">
                            <Image
                                src={assets.google}
                                alt=""
                                width={44}
                                height={44}
                            />
                        </button>
                    </div>
                    <p className="login-footer">
                        New user? <a href="/signup">Create an account</a>
                    </p>
                </section>
            </div>
        </main>
    );
}
