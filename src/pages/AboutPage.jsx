import { ShieldCheck, Target, Compass } from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import InfoCard from '../components/common/InfoCard';
import CtaBanner from '../components/common/CtaBanner';

export default function AboutPage() {
  const { about, institute } = useSiteContent();

  return (
    <>
      <PageHeader
        badge="About the Institute"
        title={about.introTitle}
        subtitle={`${institute.name} — ${institute.address}`}
      />

      <section className="section section-white">
        <div className="container">
          <SectionHeading title="Who We Are" />
          <p style={{ maxWidth: '780px', fontSize: '1.04rem' }}>{about.introText}</p>

          <div className="grid-2" style={{ marginTop: '2rem' }}>
            <InfoCard icon={Compass} title="Our Vision" description={about.vision} />
            <InfoCard icon={Target} title="Our Mission" description={about.mission} />
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <SectionHeading title="Core Values" centered />
          <div className="grid-3">
            {about.values.map((val) => (
              <InfoCard
                key={val.title}
                icon={ShieldCheck}
                title={val.title}
                description={val.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading title={about.approachTitle} />
          <p style={{ maxWidth: '780px', marginBottom: '2rem' }}>{about.approachText}</p>

          <div className="form-note" style={{ marginBottom: '2rem' }}>
            <strong>Recognition &amp; Registration Summary:</strong> {about.recognitionSummary}
          </div>

          <CtaBanner
            title="Speak With Our Academic Counsellors"
            text="Visit our Dumdum campus or fill out the static enquiry form to learn more."
            buttonLabel="Contact Us"
            to="/contact"
          />
        </div>
      </section>
    </>
  );
}
