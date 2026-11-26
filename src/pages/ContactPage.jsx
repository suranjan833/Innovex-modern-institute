import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import InfoCard from '../components/common/InfoCard';

export default function ContactPage() {
  const { institute } = useSiteContent();

  return (
    <>
      <PageHeader
        badge="Get in Touch"
        title="Contact Us"
        subtitle="Reach Innovex Modern Institute by phone, email, or in person at our Dumdum, Kolkata campus."
      />

      <section className="section section-ivory">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              <InfoCard
                icon={Phone}
                title="Phone Numbers"
                description={institute.phones.join(' / ')}
              />
              <InfoCard
                icon={Mail}
                title="Email Address"
                description={institute.email}
              />
              <InfoCard
                icon={MapPin}
                title="Campus Address"
                description={institute.address}
              />
              <InfoCard
                icon={Clock}
                title="Office Hours"
                description={institute.officeHours}
              />
            </div>

            <div className="form-card">
              <h2 style={{ fontSize: '1.5rem' }}>Send a Message</h2>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.92rem' }}>
                Static contact form layout. Direct SMTP email delivery will be enabled once credentials are configured.
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    className="form-control"
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    className="form-control"
                    placeholder="Write your query..."
                  />
                </div>
                <button type="submit" className="btn btn-secondary" style={{ width: '100%' }}>
                  Send Enquiry (Static Design)
                </button>
              </form>

              <div className="form-note">
                For immediate assistance, please call <strong>{institute.phones.join(' / ')}</strong> or email{' '}
                <strong>{institute.email}</strong>.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
