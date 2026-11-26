import { useSearchParams } from 'react-router-dom';
import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';

export default function ApplyPage() {
  const { coursesPage, institute } = useSiteContent();
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get('course') || '';

  return (
    <>
      <PageHeader
        badge="Admissions Enquiry"
        title="Apply Now"
        subtitle="Static admission enquiry form design. Online submission via SMTP will be activated in a future phase."
      />

      <section className="section section-ivory">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="form-card">
            <h2 style={{ fontSize: '1.55rem' }}>Admission Enquiry Form</h2>
            <p style={{ color: 'var(--muted-text)', fontSize: '0.92rem' }}>
              Fill in your details below. No Aadhaar upload, payment, or online tracking is active in this static phase.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="apply-name">Full Name</label>
                <input
                  id="apply-name"
                  type="text"
                  className="form-control"
                  placeholder="Enter student full name"
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
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apply-phone">Phone Number</label>
                  <input
                    id="apply-phone"
                    type="tel"
                    className="form-control"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="apply-course">Course Interest</label>
                <select
                  id="apply-course"
                  className="form-control"
                  defaultValue={preselectedCourse}
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
                />
              </div>

              <div className="form-group" style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <input id="apply-consent" type="checkbox" style={{ marginTop: '4px' }} />
                <label htmlFor="apply-consent" style={{ marginBottom: 0, fontWeight: 400 }}>
                  I agree to be contacted by {institute.name} regarding my academic enquiry.
                </label>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit Application Enquiry (Static Design)
              </button>
            </form>

            <div className="form-note">
              <strong>Note:</strong> This is a static form preview. SMTP delivery will be connected later. You can also reach us directly at{' '}
              <strong>{institute.phones.join(' / ')}</strong>.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
