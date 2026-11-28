import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import CourseCatalogSection from '../components/common/CourseCatalogSection';

export default function CoursesPage() {
  const { coursesPage, coursesCatalog, images } = useSiteContent();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const selectedCategory = searchParams.get('category') || 'All';

  const categories = ['All', ...coursesPage.categories];

  const visibleSections =
    selectedCategory === 'All'
      ? coursesCatalog.sections
      : coursesCatalog.sections.filter((sec) => sec.category === selectedCategory);

  const handleSelect = (category) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <>
      <PageHeader
        badge="Academic Programs"
        title="Courses & Programmes"
        subtitle={coursesPage.subtitle}
      />

      <section className="section section-ivory">
        <div className="container">
          <div className="split-feature">
            <div className="feature-photo">
              <img
                src={images.coursesClassroom}
                alt="Interactive course instruction at Innovex Modern Institute"
              />
            </div>
            <div>
              <h2>Guided Career, Degree &amp; Doctoral Pathways</h2>
              <p>
                Browse our complete list of Certificate, Diploma, PG Diploma,
                Undergraduate, Postgraduate, and Ph.D. programmes.
              </p>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search any course (e.g., MBA, Analytics, Yoga, Ph.D.)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search courses"
                />
              </div>

              <div className="filter-tabs" role="tablist" aria-label="Course Categories">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => handleSelect(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {visibleSections.map((section) => (
            <CourseCatalogSection
              key={section.category}
              section={section}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </section>
    </>
  );
}
