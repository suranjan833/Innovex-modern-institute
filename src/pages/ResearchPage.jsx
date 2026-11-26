import { BookMarked, FileCheck2, ScrollText } from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import InfoCard from '../components/common/InfoCard';
import CtaBanner from '../components/common/CtaBanner';

const RESEARCH_ICONS = [BookMarked, FileCheck2, ScrollText];

export default function ResearchPage() {
  const { research, images } = useSiteContent();

  return (
    <>
      <PageHeader
        badge="Scholarly Mentorship"
        title="Research Support"
        subtitle={research.subtitle}
      />

      <section className="section section-white">
        <div className="container">
          <div className="split-feature">
            <div>
              <SectionHeading
                title="Research & Publication Services"
                subtitle="Structured academic assistance for journals, books, patents, and doctoral theses."
              />
              <p>
                Whether preparing a research manuscript for peer-reviewed publication,
                organizing technical patent documentation, or structuring a thesis, our
                mentors guide scholars through every scholarly milestone.
              </p>
            </div>
            <div className="feature-photo">
              <img
                src={images.researchStudy}
                alt="Scholar reviewing research journals and books"
              />
            </div>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            {research.services.map((service, idx) => (
              <InfoCard
                key={service.title}
                icon={RESEARCH_ICONS[idx % RESEARCH_ICONS.length]}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <CtaBanner
            title={research.ctaTitle}
            text={research.ctaText}
            buttonLabel="Submit Research Enquiry"
            to="/contact"
          />
        </div>
      </section>
    </>
  );
}
