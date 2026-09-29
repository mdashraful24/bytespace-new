"use client";

import { Search } from "lucide-react";
import { heroAssets } from "./assets";
import HeroCards from "./HeroCards";

const decorativeShapes = [
  heroAssets.shape1,
  heroAssets.shape2,
  heroAssets.shape3,
  heroAssets.shape4,
  heroAssets.shape5,
  heroAssets.shape6,
  heroAssets.shape7,
] as const;

export default function HeroSection() {
  return (
    <section id="home" className="hero-content" aria-labelledby="hero-title">
      {decorativeShapes.map((src, index) => (
        <img
          key={src}
          className={`hero-asset asset-shape${index + 1}`}
          src={src}
          alt=""
          aria-hidden="true"
        />
      ))}

      <div className="copy">
        <h1 id="hero-title">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p>
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <form
          className="search-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="search-field">
            <Search size={16} aria-hidden="true" />
            <input
              aria-label="Search courses"
              placeholder="Course, topic, creator"
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>

      <img
        className="person-art"
        src={heroAssets.human}
        alt="Student holding a laptop"
      />
      <HeroCards />
    </section>
  );
}
