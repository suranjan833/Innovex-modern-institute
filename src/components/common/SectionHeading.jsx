/**
 * Reusable section title with gold accent rule and optional subtitle.
 */
export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <div className={`section-heading ${centered ? 'section-heading-center' : ''}`}>
      <h2>{title}</h2>
      <div className="gold-rule" />
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
