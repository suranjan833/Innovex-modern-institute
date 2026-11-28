import { Award, Compass, Target, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import InfoCard from '../components/common/InfoCard';
import LeadershipMessageCard from '../components/common/LeadershipMessageCard';
import CtaBanner from '../components/common/CtaBanner';

export default function AboutPage() {
  const { about, institute, images, leadershipMessages } = useSiteContent();

  return (
    <>
      <PageHeader
        badge={about.umbrellaNote}
        title={about.introTitle}
        subtitle={about.tagline}
      />

      <section className="section section-white">
        <div className="container">
          <div className="split-feature">
            <div>
              <SectionHeading title="Who We Are" subtitle={about.tagline} />
              {about.introParagraphs.map((para) => (
                <p key={para.slice(0, 24)} style={{ fontSize: '1.01rem' }}>
                  {para}
                </p>
              ))}
            </div>
            <div className="feature-photo">
              <img
                src={images.coursesClassroom}
                alt="Classroom mentoring at Innovex Modern Institute"
              />
            </div>
          </div>

          <div
            className="card"
            style={{
              backgroundColor: 'var(--sky-tint)',
              borderColor: 'rgba(30, 64, 175, 0.22)',
              marginTop: '1rem',
            }}
          >
            <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
              <Building2 size={24} style={{ color: 'var(--royal-blue)', flexShrink: 0, marginTop: '3px' }} />
              <div>
                <h3>{about.partnershipTitle}</h3>
                <p style={{ marginBottom: 0 }}>{about.partnershipText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <SectionHeading title={about.focusTitle} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.25rem' }}>
            {about.focusAreas.map((area) => (
              <span key={area} className="badge badge-gold">
                {area}
              </span>
            ))}
          </div>
          <p style={{ maxWidth: '880px', marginBottom: '2.25rem' }}>{about.approachText}</p>

          <div className="grid-2">
            <InfoCard
              icon={ShieldCheck}
              title={about.qualityTitle}
              description={about.qualityText}
            >
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  marginTop: '0.75rem',
                  display: 'grid',
                  gap: '0.5rem',
                  fontSize: '0.92rem',
                }}
              >
                {about.registrations.map((reg) => (
                  <li key={reg} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <CheckCircle2
                      size={16}
                      style={{ color: 'var(--royal-blue)', marginTop: '3px', flexShrink: 0 }}
                    />
                    <span>{reg}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard
              icon={Award}
              title="Our Inclusive Commitment"
              description={about.commitmentParagraphs[0]}
            >
              <p style={{ fontSize: '0.95rem', marginBottom: 0, marginTop: '0.75rem' }}>
                {about.commitmentParagraphs[1]}
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <SectionHeading
            title="Leadership Messages"
            subtitle="Words of guidance and vision from our academic leadership."
            centered
          />
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <LeadershipMessageCard item={leadershipMessages.chairman} />
            <LeadershipMessageCard item={leadershipMessages.principal} />
            <LeadershipMessageCard item={leadershipMessages.tnpHead} />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading title="Vision & Mission" centered />
          <div style={{ marginBottom: '2rem' }}>
            <InfoCard icon={Compass} title="Our Vision" description={about.vision} />
          </div>

          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            {about.missionItems.map((item) => (
              <InfoCard
                key={item.title}
                icon={Target}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <CtaBanner
            title={institute.ctaTagline}
            text="Connect with our Dum Dum, Kolkata academic team or send your enquiry directly on WhatsApp."
            buttonLabel="Apply Now"
            to="/apply"
          />
        </div>
      </section>
    </>
  );
}
