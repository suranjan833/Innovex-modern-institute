import { ShieldCheck, FileText } from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import InfoCard from '../components/common/InfoCard';

export default function RecognitionPage() {
  const { recognition } = useSiteContent();

  return (
    <>
      <PageHeader
        badge="Transparency & Records"
        title="Recognition & Approval"
        subtitle={recognition.subtitle}
      />

      <section className="section section-white">
        <div className="container">
          <div
            className="card"
            style={{
              backgroundColor: 'var(--gold-tint)',
              borderColor: 'rgba(197, 155, 39, 0.45)',
              marginBottom: '2.5rem',
            }}
          >
            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <ShieldCheck size={24} style={{ color: '#8a6914', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3>{recognition.noticeTitle}</h3>
                <p style={{ marginBottom: 0 }}>{recognition.noticeText}</p>
              </div>
            </div>
          </div>

          <SectionHeading
            title="Registration & Quality Records"
            subtitle="Client-verified registration numbers and quality management standards."
          />

          <div className="grid-3">
            {recognition.records.map((item) => (
              <InfoCard
                key={item.label}
                icon={FileText}
                badge={item.status}
                title={item.label}
                description={item.value}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
