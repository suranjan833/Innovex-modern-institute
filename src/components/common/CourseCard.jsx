import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable course card showing category, name, duration, eligibility, mode, and CTA.
 */
export default function CourseCard({ course }) {
  return (
    <article className="card">
      <div>
        <span className="badge">{course.category}</span>
        <h3 style={{ marginTop: '0.75rem' }}>{course.name}</h3>
        <p>{course.description}</p>
        <ul className="meta-list">
          <li>
            <strong>Duration:</strong> {course.duration}
          </li>
          <li>
            <strong>Eligibility:</strong> {course.eligibility}
          </li>
          <li>
            <strong>Mode:</strong> {course.mode}
          </li>
        </ul>
      </div>
      <Link
        to={`/apply?course=${encodeURIComponent(course.category)}`}
        className="btn btn-secondary"
      >
        Enquire / Apply Now <ArrowRight size={16} />
      </Link>
    </article>
  );
}
