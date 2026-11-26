export default function PageHeader({ badge, title, subtitle }) {
  return (
    <section className="page-header">
      <div className="container">
        {badge && <span className="badge badge-gold">{badge}</span>}
        <h1 style={{ marginTop: badge ? "0.75rem" : 0 }}>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
