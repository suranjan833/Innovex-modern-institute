import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './CourseCatalogSection.css';

/**
 * Displays a course category's full list, modules/semesters/Ph.D. structure, and Apply CTA.
 */
export default function CourseCatalogSection({ section, searchQuery }) {
  const query = searchQuery.trim().toLowerCase();
  const filteredItems = query
    ? section.items.filter((item) => item.name.toLowerCase().includes(query))
    : section.items;

  if (query && filteredItems.length === 0) {
    return null;
  }

  return (
    <section className="catalog-section">
      <div className="catalog-header">
        <div>
          <h2>{section.title}</h2>
          <p className="catalog-meta">{section.duration}</p>
          {section.description && <p className="catalog-desc">{section.description}</p>}
          {section.eligibility && (
            <p className="catalog-desc">
              <strong>Eligibility:</strong> {section.eligibility}
            </p>
          )}
        </div>
        <Link
          to={`/apply?course=${encodeURIComponent(section.category)}`}
          className="btn btn-primary"
          style={{ whiteSpace: 'nowrap' }}
        >
          Apply Now <ArrowRight size={16} />
        </Link>
      </div>

      <div className="catalog-grid">
        {filteredItems.map((item, idx) => (
          <Link
            key={`${section.category}-${item.name}-${idx}`}
            to={`/apply?course=${encodeURIComponent(section.category)}`}
            className="catalog-row"
          >
            <span className="catalog-name">{item.name}</span>
            <span className="badge">{item.duration}</span>
          </Link>
        ))}
      </div>

      {section.hasMore && !query && (
        <p className="catalog-more">
          &hellip;and many more programmes available. Enquire for additional specialisations.
        </p>
      )}

      {section.modules && (
        <div className="catalog-structure-card">
          <h3>{section.modulesTitle}</h3>
          <ul className="catalog-bullets">
            {section.modules.map((mod) => (
              <li key={mod}>
                <CheckCircle2 size={15} />
                <span>{mod}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {section.semesters && (
        <div className="grid-2" style={{ marginTop: '1.25rem' }}>
          {section.semesters.map((sem) => (
            <div key={sem.title} className="catalog-structure-card">
              <h3>{sem.title}</h3>
              <ul className="catalog-bullets">
                {sem.topics.map((topic) => (
                  <li key={topic}>
                    <CheckCircle2 size={15} />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {section.phdYears && (
        <div style={{ marginTop: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Ph.D. Programme Structure</h3>
          <div className="grid-3">
            {section.phdYears.map((yr) => (
              <div key={yr.title} className="catalog-structure-card">
                <h4 style={{ marginBottom: '0.75rem' }}>{yr.title}</h4>
                <ul className="catalog-bullets">
                  {yr.topics.map((topic) => (
                    <li key={topic}>
                      <CheckCircle2 size={15} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
