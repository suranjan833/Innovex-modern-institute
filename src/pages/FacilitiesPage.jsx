import { Landmark, Award, CreditCard, CheckCircle2 } from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import InfoCard from '../components/common/InfoCard';

const FACILITY_ICONS = [Landmark, Award, CreditCard];

export default function FacilitiesPage() {
  const { facilities } = useSiteContent();

  return (
    <>
      <PageHeader
        badge="Student Support"
        title="Student Facilities"
        subtitle={facilities.subtitle}
      />

      <section className="section section-ivory">
        <div className="container">
          <SectionHeading
            title="Financial Guidance & Checklists"
            subtitle="Static eligibility and documentation overview for student financial support schemes."
          />

          <div className="grid-3">
            {facilities.items.map((item, idx) => (
              <InfoCard
                key={item.title}
                icon={FACILITY_ICONS[idx % FACILITY_ICONS.length]}
                title={item.title}
                description={item.description}
              >
                <div style={{ marginTop: '1rem' }}>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--navy-deep)' }}>
                    Indicative Checklist:
                  </strong>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      marginTop: '0.5rem',
                      display: 'grid',
                      gap: '0.45rem',
                      fontSize: '0.88rem',
                    }}
                  >
                    {item.checklist.map((point) => (
                      <li
                        key={point}
                        style={{ display: 'flex', gap: '0.45rem', alignItems: 'flex-start' }}
                      >
                        <CheckCircle2
                          size={15}
                          style={{ color: 'var(--royal-blue)', marginTop: '3px', flexShrink: 0 }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
