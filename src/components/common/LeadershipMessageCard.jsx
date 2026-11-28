import { Quote } from 'lucide-react';

/**
 * Reusable editorial card for leadership messages (Chairman, Principal, T&P Head).
 */
export default function LeadershipMessageCard({ item }) {
  return (
    <article className="leadership-card">
      <div className="leadership-header">
        {item.photo ? (
          <img src={item.photo} alt={item.name} className="leadership-photo" />
        ) : (
          <div className="leadership-avatar" aria-hidden="true">
            {item.initials}
          </div>
        )}
        <div>
          <span className="badge badge-gold">{item.heading}</span>
          <h3>{item.name}</h3>
          <div className="leadership-role">
            {item.role} &bull; {item.institute}
          </div>
        </div>
        <div className="leadership-quote-badge" aria-hidden="true">
          <Quote size={18} />
        </div>
      </div>

      <div className="leadership-body">
        {item.paragraphs.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>

      <div className="leadership-footer">
        <span className="leadership-motto">&ldquo;{item.motto}&rdquo;</span>
        <span className="leadership-signoff">
          Warm regards, <strong>{item.name}</strong>
        </span>
      </div>
    </article>
  );
}
