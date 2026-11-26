import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useSiteContent } from '../data/useSiteContent';
import { openWhatsAppEnquiry } from '../utils/whatsapp';
import PageHeader from '../components/common/PageHeader';
import InfoCard from '../components/common/InfoCard';

export default function ContactPage() {
  const { institute } = useSiteContent();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsAppEnquiry({
      whatsappNumber: institute.whatsappNumber,
      subject: `Contact Enquiry — ${institute.name}`,
      fields: [
        ['Full Name', name],
        ['Email', email],
        ['Phone Number', phone],
        ['Message', message],
      ],
    });
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        badge="Get in Touch"
        title="Contact Us"
        subtitle="Reach Innovex Modern Institute by phone, email, WhatsApp, or in person at our Dum Dum, Kolkata campus."
      />

      <section className="section section-ivory">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              <InfoCard icon={Phone} title="Phone Numbers" description={institute.phones.join(' / ')} />
              <InfoCard icon={Mail} title="Email Address" description={institute.email} />
              <InfoCard icon={MapPin} title="Campus Address" description={institute.address} />
              <InfoCard icon={Clock} title="Office Hours" description={institute.officeHours} />
            </div>

            <div className="form-card">
              <h2 style={{ fontSize: '1.5rem' }}>Send a Message</h2>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.92rem' }}>
                Enter your contact details and query below to message us directly on WhatsApp.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit mobile number"
                    className="form-control"
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    className="form-control"
                    placeholder="Write your query..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-secondary" style={{ width: '100%' }}>
                  Send Enquiry via WhatsApp
                </button>

                {submitted && (
                  <div className="form-note" role="status">
                    Your query has been opened in WhatsApp and all form fields have been cleared.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
