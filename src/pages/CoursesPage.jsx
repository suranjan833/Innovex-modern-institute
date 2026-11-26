import { useSearchParams } from 'react-router-dom';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import CourseCard from '../components/common/CourseCard';

export default function CoursesPage() {
  const { coursesPage, images } = useSiteContent();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';

  const categories = ['All', ...coursesPage.categories];

  const filteredCourses =
    selectedCategory === 'All'
      ? coursesPage.items
      : coursesPage.items.filter((item) => item.category === selectedCategory);

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
        title="Courses & Programs"
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
              <h2>Guided Career &amp; Degree Pathways</h2>
              <p>
                Choose from Certificate, Diploma, UG, PG, PG Diploma, and PhD guidance
                designed around practical skills, structured mentorship, and verified
                academic progression.
              </p>
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

          <div className="grid-3">
            {filteredCourses.map((course) => (
              <CourseCard key={`${course.category}-${course.name}`} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
