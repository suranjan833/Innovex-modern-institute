import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable call-to-action banner for static enquiry prompts.
 */
export default function CtaBanner({ title, text, buttonLabel = 'Apply Now', to = '/apply' }) {
  return (
    <div className="cta-banner">
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <Link to={to} className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
        {buttonLabel} <ArrowRight size={17} />
      </Link>
    </div>
  );
}
