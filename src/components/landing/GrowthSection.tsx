const landing = "/images/landing";

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function GrowthSection() {
  return (
    <section className="growth-section" aria-label="Bytespace learning platform">
      <img className="growth-blur growth-blur-one" src={`${landing}/layerblur1.png`} alt="" aria-hidden="true" />
      <img className="growth-blur growth-blur-two" src={`${landing}/ellipse22.png`} alt="" aria-hidden="true" />
      <img className="growth-blur growth-blur-three" src={`${landing}/ellipse33.png`} alt="" aria-hidden="true" />
      <img className="growth-blur growth-blur-four" src={`${landing}/ellipse55.png`} alt="" aria-hidden="true" />
      <img className="growth-blur growth-blur-five" src={`${landing}/ellipse44.png`} alt="" aria-hidden="true" />

      <div className="growth-inner">
        <div className="growth-row growth-row-top">
          <div className="growth-copy growth-copy-top">
            <h1>Your Path to Professional<br />Growth Starts Here!</h1>
            <p>
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <fieldset className="growth-stats" aria-label="Platform statistics">
              <div><strong>12K</strong><span>Students</span></div>
              <div><strong>70+</strong><span>Courses</span></div>
              <div><strong>16</strong><span>Creators</span></div>
            </fieldset>
          </div>

          <div className="growth-visual growth-visual-top">
            {/* <img className="growth-shape growth-shape-top" src={`${landing}/shape9.png`} alt="" aria-hidden="true" /> */}
            <img className="growth-person growth-person-top" src={`${landing}/human441.png`} alt="Student learning with a laptop" />
            {/* <div className="growth-course-mini">
              <strong>Learn Figma from Basic</strong>
              <span>by prepared studio</span>
              <div className="growth-mini-tags"><i>Beginner</i><i>2 hours 10 min</i></div>
              <b><em>$25</em>/lifetime</b>
            </div> */}
            {/* <div className="growth-progress-mini"><span>Learning Progress</span><strong>55%</strong><i /></div> */}
          </div>
        </div>

        <div className="growth-row growth-row-bottom">
          <div className="growth-visual growth-visual-bottom">
            {/* <img className="growth-shape growth-shape-bottom" src={`${landing}/shape11.png`} alt="" aria-hidden="true" /> */}
            <img className="growth-person growth-person-bottom" src={`${landing}/human442.png`} alt="Creator holding a tablet" />
            {/* <div className="growth-revenue growth-revenue-total"><span>Total Revenue</span><small>July 2023</small><strong>$120,029</strong><i /></div>
            <div className="growth-revenue growth-revenue-year"><span>Year to Date</span><small>2022</small><strong>$1,200.38</strong><b>+12%</b></div>
            <div className="growth-students-mini"><span>Happy Students</span><small>4,583 Users</small><img src={`${landing}/avatar1.png`} alt="" /><b>2K+</b></div> */}
          </div>

          <div className="growth-copy growth-copy-bottom">
            <h2>Create &amp; Manage<br />Courses Easily.</h2>
            <p><strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul>
              {benefits.map((benefit) => <li key={benefit}><span>✓</span>{benefit}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}