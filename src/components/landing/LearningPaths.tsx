import { learningPaths } from "./assets";

export default function LearningPaths() {
  return (
    <section className="learning-paths" aria-labelledby="learning-paths-title">
      <div className="learning-paths-heading">
        <h2 id="learning-paths-title">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p>
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various
          <br className="desktop-break" /> fields, ensuring there&apos;s
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>
      <div className="path-grid">
        {learningPaths.map((path) => (
          <a className="path-card" href="#courses" key={path.name}>
            <span className="path-icon">
              <img src={path.icon} alt="" />
            </span>
            <span>{path.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
