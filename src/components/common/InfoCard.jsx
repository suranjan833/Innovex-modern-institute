/**
 * Reusable card widget for strengths, services, values, and checklists.
 */
export default function InfoCard({ icon: Icon, badge, title, description, children }) {
  return (
    <article className="card">
      <div>
        {Icon && (
          <div className="card-icon">
            <Icon size={22} />
          </div>
        )}
        {badge && (
          <span className="badge" style={{ marginBottom: '0.7rem' }}>
            {badge}
          </span>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        {children}
      </div>
    </article>
  );
}
