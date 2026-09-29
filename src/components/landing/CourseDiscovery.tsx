import { Star } from "lucide-react";
import { categories, courseAssets, courses } from "./assets";

type CourseCardProps = {
  title: string;
  image: string;
  price: string;
};

function CourseCard({ title, image, price }: CourseCardProps) {
  return (
    <article className="course-tile">
      <div className="course-image-wrap">
        <img src={image} alt="" />
      </div>
      <div className="course-title-row">
        <h3>{title}</h3>
        <span>
          4.5 <Star size={16} fill="currentColor" />
        </span>
      </div>
      <p className="course-author">
        by <a href="#creators">pureparol studio</a>
      </p>
      <div className="course-meta">
        <span className="course-level">
          <img src={courseAssets.level} alt="" />
          Beginner
        </span>
        <img src={courseAssets.avatars} alt="Course students" />
      </div>
      <p className="course-price">
        <strong>{price}</strong>
        <small>/lifetime</small>
      </p>
    </article>
  );
}

export default function CourseDiscovery() {
  return (
    <section
      id="courses"
      className="course-discovery"
      aria-labelledby="courses-title"
    >
      <div className="course-heading">
        <h2 id="courses-title">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p>
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different
          <br className="desktop-break" /> fields, from technology to the arts,
          and make a difference in your career and life.
        </p>
      </div>
      <div className="category-list">
        {categories.map((category, index) => (
          <button
            type="button"
            className={index === 0 ? "active" : ""}
            key={category}
          >
            {category}
          </button>
        ))}
        <button type="button" className="more">
          + More
        </button>
      </div>
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  );
}
