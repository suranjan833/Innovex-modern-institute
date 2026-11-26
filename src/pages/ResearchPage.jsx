import { BookMarked, FileCheck2, ScrollText } from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import InfoCard from '../components/common/InfoCard';
import CtaBanner from '../components/common/CtaBanner';

const RESEARCH_ICONS = [BookMarked, FileCheck2, ScrollText];

export default function ResearchPage() {
  const { research } = useSiteContent();

  return (
    <>
      <PageHeader
        badge="Scholarly Mentorship"
        title="Research Support"
        subtitle={research.subtitle}
      />

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            title="Research & Publication Services"
            subtitle="Structured academic assistance for journals, books, patents, and doctoral theses."
          />
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
