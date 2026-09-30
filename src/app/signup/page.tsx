"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import "../auth.css";
import { brandAssets } from "@/components/landing/assets";

const assets = {
    digital: "/images/landing/card2.png",
    bigData: "/images/landing/card1.png",
    triangle: "/images/landing/shape10.png",
    scribble: "/images/landing/shape2.png",
    students: "/images/landing/stat-card3.png",
    shape16: "/images/landing/shape16.png",
};

export default function SignupPage() {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <main className="signup-page">
            <div className="signup-grid" aria-hidden="true" />
            <div className="signup-inner">
                <section className="signup-promo" aria-labelledby="signup-promo-title">
                    <img src={brandAssets.siteLogo} alt="ByteSpace" width="24" height="24" />
                    <div className="signup-copy">
                        <h1 id="signup-promo-title">Sign up and come in</h1>
                        <p>
                            The registration process is straightforward, uncomplicated, and
                            efficient, allowing users to sign up quickly, easily, and at no
                            cost
                        </p>
                    </div>

                    <div className="signup-collage" aria-hidden="true">
                        <Image
                            className="signup-card signup-card-back"
                            src={assets.digital}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                        <Image
                            className="signup-card signup-card-front"
                            src={assets.bigData}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                        <Image
                            className="signup-triangle"
                            src={assets.triangle}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                        <Image
                            className="signup-shape16"
                            src={assets.shape16}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                        <Image
                            className="signup-scribble"
                            src={assets.scribble}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                        <Image
                            className="signup-students"
                            src={assets.students}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                    </div>
                </section>

                <section className="signup-panel" aria-labelledby="welcome-title">
                    <p className="signup-eyebrow">Create an Account</p>
                    <h2 id="welcome-title">
                        Welcome to
                        <br />
                        ByteSpace
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Full Name
                            <input
                                name="name"
                                placeholder="Jamie Davis"
                                autoComplete="name"
                            />
                        </label>
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
                                autoComplete="new-password"
                            />
                        </label>
                        <button type="submit">Continue</button>
                    </form>
                    <p className="signup-login">
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </section>
            </div>
        </main>
    );
}
