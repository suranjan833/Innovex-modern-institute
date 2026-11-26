import { Laptop, Landmark, Users, Target } from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import InfoCard from '../components/common/InfoCard';
import CtaBanner from '../components/common/CtaBanner';

const TRACK_ICONS = [Laptop, Landmark, Users, Target];

export default function AcademicSupportPage() {
  const { academicSupport } = useSiteContent();

  return (
    <>
      <PageHeader
        badge="Mentorship & Exam Prep"
        title="Online Academic Support"
        subtitle={academicSupport.subtitle}
      />

      <section className="section section-ivory">
        <div className="container">
          <SectionHeading
            title="Guided Learning Tracks"
            subtitle="Focused online academic and competitive exam preparation."
          />
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            {academicSupport.tracks.map((track, idx) => (
              <InfoCard
                key={track.title}
                icon={TRACK_ICONS[idx % TRACK_ICONS.length]}
                title={track.title}
                description={track.description}
              />
            ))}
          </div>

          <CtaBanner
            title="Join an Online Academic Support Batch"
            text="Enquire about upcoming UG/PG guidance, Bank PO, Teaching, or CAT/MAT/JECA/JEEMAT batches."
            buttonLabel="Apply / Enquire"
            to="/apply"
          />
        </div>
      </section>
    </>
  );
}
