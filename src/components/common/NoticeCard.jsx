import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

/**
 * Reusable notice card for Home preview and Notice Board page.
 */
export default function NoticeCard({ notice }) {
  return (
    <article className="card">
      <div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--royal-blue)',
            marginBottom: '0.6rem',
          }}
        >
          <Calendar size={15} />
          <span>{notice.date}</span>
        </div>
        <h3>{notice.title}</h3>
        <p>{notice.description}</p>
      </div>
      {notice.linkUrl && (
        <Link
          to={notice.linkUrl}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontWeight: 600,
            color: 'var(--royal-blue)',
            fontSize: '0.92rem',
            marginTop: '0.5rem',
          }}
        >
          {notice.linkLabel || 'Learn More'} <ArrowRight size={15} />
        </Link>
      )}
    </article>
  );
}
