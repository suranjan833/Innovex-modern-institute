import { Link } from 'react-router-dom';
import {
  ArrowRight,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  Laptop,
  Lightbulb,
  Users,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import SectionHeading from '../components/common/SectionHeading';
import InfoCard from '../components/common/InfoCard';
import NoticeCard from '../components/common/NoticeCard';
import CtaBanner from '../components/common/CtaBanner';

const STRENGTH_ICONS = [Award, Users, Lightbulb, GraduationCap];
const SERVICE_ICONS = [
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  BookOpen,
  Laptop,
  Laptop,
  Briefcase,
  GraduationCap,
];

export default function HomePage() {
  const { institute, images, home, coursesPage, notices, facilities } = useSiteContent();

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="badge badge-gold">{home.heroBadge}</span>
            <div className="hero-motto">{institute.motto}</div>
            <h1 className="hero-title">{home.heroTitle}</h1>
            <p className="hero-subtitle">{home.heroSubtitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem' }}>
              <Link to="/apply" className="btn btn-primary">
                {home.primaryCta} <ArrowRight size={17} />
              </Link>
              <Link to="/courses" className="btn btn-outline-light">
                {home.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="hero-image-frame">
            <img
              src={images.heroCampus}
              alt="Students studying at Innovex Modern Institute, Kolkata"
            />
            <div className="hero-image-caption">
              {institute.name} • {institute.city}
            </div>
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
                  style={{ fontWeight: 600, color: 'var(--royal-blue)', fontSize: '0.9rem' }}
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
            title={home.servicesTitle}
            subtitle={home.servicesSubtitle}
            centered
          />
          <div className="services-grid">
            {home.services.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <div key={service.title} className="service-item">
                  <div className="service-item-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-white">
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

      <section className="section section-ivory">
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

      <section className="section section-white">
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
                  style={{ fontWeight: 600, color: 'var(--royal-blue)', fontSize: '0.9rem' }}
                >
                  View Checklist &rarr;
                </Link>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            <InfoCard icon={Phone} title="Call Us" description={institute.phones.join(' / ')} />
            <InfoCard icon={Mail} title="Email Us" description={institute.email} />
            <InfoCard icon={MapPin} title="Campus Location" description={institute.address} />
          </div>
          <CtaBanner
            title={institute.ctaTagline}
            text="Submit an admission enquiry or visit our Dum Dum, Kolkata campus for personal academic counselling."
            buttonLabel="Apply Now"
            to="/apply"
          />
        </div>
      </section>
    </>
  );
}
