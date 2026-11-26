import { Link } from 'react-router-dom';
import {
  ArrowRight,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import SectionHeading from '../components/common/SectionHeading';
import InfoCard from '../components/common/InfoCard';
import NoticeCard from '../components/common/NoticeCard';
import CtaBanner from '../components/common/CtaBanner';

const STRENGTH_ICONS = [GraduationCap, BookOpen, Briefcase, Award];

export default function HomePage() {
  const { institute, home, coursesPage, notices, facilities } = useSiteContent();

  return (
    <>
      <section
        style={{
          background:
            'linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-primary) 62%, var(--royal-blue) 100%)',
          color: 'var(--white)',
          padding: '4.75rem 0',
          borderBottom: '4px solid var(--gold-primary)',
        }}
      >
        <div className="container">
          <span className="badge badge-gold">{home.heroBadge}</span>
          <h1
            style={{
              color: 'var(--white)',
              fontSize: 'clamp(2rem, 4vw, 3.1rem)',
              maxWidth: '780px',
              marginTop: '1rem',
            }}
          >
            {home.heroTitle}
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.88)',
              fontSize: '1.08rem',
              maxWidth: '660px',
              marginBottom: '2rem',
            }}
          >
            {home.heroSubtitle}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem' }}>
            <Link to="/apply" className="btn btn-primary">
              {home.primaryCta} <ArrowRight size={17} />
            </Link>
            <Link to="/courses" className="btn btn-outline-light">
              {home.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            title="Academic & Course Categories"
            subtitle="Explore structured programs from foundational certificates to doctoral research guidance."
          />
          <div className="grid-3">
            {coursesPage.categories.map((category) => (
              <InfoCard
                key={category}
                icon={GraduationCap}
                title={category}
                description="Structured curriculum and academic guidance tailored to your career stage."
              >
                <Link
                  to={`/courses?category=${encodeURIComponent(category)}`}
                  style={{
                    fontWeight: 600,
                    color: 'var(--royal-blue)',
                    fontSize: '0.9rem',
                  }}
                >
                  View Category &rarr;
                </Link>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <SectionHeading
            title={home.strengthsTitle}
            subtitle={home.strengthsSubtitle}
            centered
          />
          <div className="grid-4">
            {home.strengths.map((item, idx) => (
              <InfoCard
                key={item.title}
                icon={STRENGTH_ICONS[idx % STRENGTH_ICONS.length]}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            title="Latest Notices"
            subtitle="Important announcements and academic desk updates."
          />
          <div className="grid-3">
            {notices.slice(0, 3).map((notice) => (
              <NoticeCard key={notice.title} notice={notice} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <SectionHeading
            title="Student Facilities Preview"
            subtitle={facilities.subtitle}
          />
          <div className="grid-3">
            {facilities.items.map((item) => (
              <InfoCard
                key={item.title}
                badge="Student Support"
                title={item.title}
                description={item.description}
              >
                <Link
                  to="/facilities"
                  style={{
                    fontWeight: 600,
                    color: 'var(--royal-blue)',
                    fontSize: '0.9rem',
                  }}
                >
                  View Checklist &rarr;
                </Link>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            <InfoCard
              icon={Phone}
              title="Call Us"
              description={institute.phones.join(' / ')}
            />
            <InfoCard
              icon={Mail}
              title="Email Us"
              description={institute.email}
            />
            <InfoCard
              icon={MapPin}
              title="Campus Location"
              description={institute.address}
            />
          </div>
          <CtaBanner
            title="Ready to Start Your Academic Journey?"
            text="Submit an admission enquiry or visit our Dumdum, Kolkata campus for personal guidance."
            buttonLabel="Apply Now"
            to="/apply"
          />
        </div>
      </section>
    </>
  );
}
