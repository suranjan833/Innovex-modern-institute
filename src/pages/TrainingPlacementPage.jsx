import { Briefcase, ClipboardCheck, MessageSquare } from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import InfoCard from '../components/common/InfoCard';
import CtaBanner from '../components/common/CtaBanner';

const STEP_ICONS = [ClipboardCheck, Briefcase, MessageSquare];

export default function TrainingPlacementPage() {
  const { trainingPlacement, images } = useSiteContent();

  return (
    <>
      <PageHeader
        badge="Career Readiness"
        title="Training & Placement"
        subtitle={trainingPlacement.subtitle}
      />

      <section className="section section-white">
        <div className="container">
          <div className="split-feature">
            <div>
              <SectionHeading title={trainingPlacement.placementTitle} />
              <p>{trainingPlacement.placementText}</p>
            </div>
            <div className="feature-photo">
              <img
                src={images.careerPlacement}
                alt="Career guidance and placement preparation session"
              />
            </div>
          </div>

          <SectionHeading title={trainingPlacement.trainingTitle} />
          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            {trainingPlacement.trainingSteps.map((step, idx) => (
              <InfoCard
                key={step.title}
                icon={STEP_ICONS[idx % STEP_ICONS.length]}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          <CtaBanner
            title="Interested in Career & Placement Guidance?"
            text="Connect with our team to learn more about upcoming training workshops."
            buttonLabel="Contact Us"
            to="/contact"
          />
        </div>
      </section>
    </>
  );
}
