import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useSiteContent } from '../../data/useSiteContent';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { institute } = useSiteContent();

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-4">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <img
                src="/logo.jpg"
                alt={`${institute.name} Logo`}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1.5px solid #c59b27',
                  flexShrink: 0,
                }}
              />
              <h4 style={{ marginBottom: 0 }}>{institute.name}</h4>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{institute.tagline}</p>
            <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)', marginBottom: '0.6rem' }}>
              {institute.officeHours}
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--gold-bright)', marginBottom: '0.2rem' }}>
              Udyam Reg.: {institute.udyamNumber}
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--gold-bright)', marginBottom: 0 }}>
              {institute.isoStandard}
            </p>
          </div>

          <div>
            <h4>Academics</h4>
            <ul className="footer-links">
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/research">Research Support</Link></li>
              <li><Link to="/academic-support">Online Academic Support</Link></li>
              <li><Link to="/training-placement">Training &amp; Placement</Link></li>
            </ul>
          </div>

          <div>
            <h4>Student Desk</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/notices">Notice Board</Link></li>
              <li><Link to="/facilities">Student Facilities</Link></li>
              <li><Link to="/recognition">Recognition &amp; Approval</Link></li>
              <li><Link to="/apply">Apply Now</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Phone size={15} style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{institute.phones.join(', ')}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Mail size={15} style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{institute.email}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <MapPin size={15} style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{institute.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {CURRENT_YEAR} {institute.name}. All rights reserved.
          </span>
          <span>
            Udyam: {institute.udyamNumber} &bull; {institute.isoStandard} &bull; Dum Dum, Kolkata – 700074
          </span>
        </div>
      </div>
    </footer>
  );
}
