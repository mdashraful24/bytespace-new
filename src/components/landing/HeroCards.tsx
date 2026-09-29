import { Star } from "lucide-react";
import { heroAssets } from "./assets";

export function CourseBadge() {
  return (
    <div className="float-card course-card">
      <strong>UI/UX Design</strong>
      <span>200 Courses&nbsp; · &nbsp;1000+ Students</span>
    </div>
  );
}

export function ProgressCard() {
  return (
    <div className="float-card progress-card">
      <span>Learning Progress</span>
      <strong>55%</strong>
      <div className="progress-track">
        <i />
      </div>
    </div>
  );
}

export function StudentsCard() {
  return (
    <div className="float-card students-card">
      <strong>Happy Students</strong>
      <span>
        4.5 (240k) <Star size={10} fill="currentColor" />
      </span>
      <div className="student-row">
        <img className="avatar-art" src={heroAssets.avatars} alt="Students" />
      </div>
    </div>
  );
}

export default function HeroCards() {
  return (
    <>
      <CourseBadge />
      <ProgressCard />
      <StudentsCard />
    </>
  );
}
