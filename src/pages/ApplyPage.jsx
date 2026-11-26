import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSiteContent } from '../data/useSiteContent';
import { openWhatsAppEnquiry } from '../utils/whatsapp';
import PageHeader from '../components/common/PageHeader';

export default function ApplyPage() {
  const { coursesPage, institute } = useSiteContent();
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(searchParams.get('course') || '');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsAppEnquiry({
      whatsappNumber: institute.whatsappNumber,
      subject: `Admission Enquiry — ${institute.name}`,
      fields: [
        ['Full Name', name],
        ['Email', email],
        ['Phone Number', phone],
        ['Course Interest', course],
        ['Message', message],
      ],
    });
    setName('');
    setEmail('');
    setPhone('');
    setCourse('');
    setMessage('');
    setConsent(false);
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        badge="Admissions Enquiry"
        title="Apply Now"
        subtitle="Submit your admission query directly to our counselling team on WhatsApp."
      />

      <section className="section section-ivory">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="form-card">
            <h2 style={{ fontSize: '1.55rem' }}>Admission Enquiry Form</h2>
            <p style={{ color: 'var(--muted-text)', fontSize: '0.92rem' }}>
              Fill in your details below to send your admission enquiry directly to our WhatsApp desk.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="apply-name">Full Name</label>
                <input
                  id="apply-name"
                  type="text"
                  className="form-control"
                  placeholder="Enter student full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label htmlFor="apply-email">Email Address</label>
                  <input
                    id="apply-email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apply-phone">Phone Number</label>
                  <input
                    id="apply-phone"
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
              </div>

              <div className="form-group">
                <label htmlFor="apply-course">Course Interest</label>
                <select
                  id="apply-course"
                  className="form-control"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                >
                  <option value="">Select a course category</option>
                  {coursesPage.categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                  <option value="Research Support">Research Support</option>
                  <option value="Online Academic Support">Online Academic Support</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="apply-message">Message</label>
                <textarea
                  id="apply-message"
                  rows="4"
                  className="form-control"
                  placeholder="Share your academic background or course questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div
                className="form-group"
                style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}
              >
                <input
                  id="apply-consent"
                  type="checkbox"
                  style={{ marginTop: '4px' }}
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                <label htmlFor="apply-consent" style={{ marginBottom: 0, fontWeight: 400 }}>
                  I agree to be contacted by {institute.name} regarding my academic enquiry.
                </label>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit Enquiry via WhatsApp
              </button>

              {submitted && (
                <div className="form-note" role="status">
                  Your enquiry has been opened in WhatsApp and all form fields have been cleared.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
