import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BookOpen, ChevronDown, Menu, X } from 'lucide-react';
import { useSiteContent } from '../../data/useSiteContent';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Courses',
    to: '/courses',
    dropdownKey: 'courses',
  },
  {
    label: 'Research',
    to: '/research',
    dropdown: [
      { label: 'Research Overview', to: '/research' },
      { label: 'Publishing Support', to: '/research' },
      { label: 'Patent Assistance', to: '/research' },
      { label: 'Thesis Writing Support', to: '/research' },
    ],
  },
  {
    label: 'Academic Support',
    to: '/academic-support',
    dropdown: [
      { label: 'UG & PG Academic Guidance', to: '/academic-support' },
      { label: 'Bank PO Preparation', to: '/academic-support' },
      { label: 'Teaching & Placement Support', to: '/academic-support' },
      { label: 'CAT, MAT, JECA & JEEMAT', to: '/academic-support' },
    ],
  },
  { label: 'Notices', to: '/notices' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Placement', to: '/training-placement' },
  { label: 'Recognition', to: '/recognition' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { institute, coursesPage } = useSiteContent();

  const courseDropdown = coursesPage.categories.map((cat) => ({
    label: cat,
    to: `/courses?category=${encodeURIComponent(cat)}`,
  }));

  const getDropdown = (item) => {
    if (item.dropdownKey === 'courses') return courseDropdown;
    return item.dropdown || null;
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand-link" onClick={() => setMenuOpen(false)}>
          <div className="brand-crest" aria-hidden="true">
            <BookOpen size={21} />
          </div>
          <div className="brand-divider" aria-hidden="true" />
          <div className="brand-text-group">
            <div className="brand-title">{institute.name}</div>
            <div className="brand-subtitle">{institute.city}</div>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => {
            const dropdown = getDropdown(item);
            return (
              <div key={item.to} className="nav-item-wrapper">
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                  {dropdown && <ChevronDown size={14} />}
                </NavLink>

                {dropdown && (
                  <div className="nav-dropdown">
                    <div className="nav-dropdown-inner">
                      {dropdown.map((sub) => (
                        <Link key={sub.label} to={sub.to} className="nav-dropdown-link">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="nav-right-group">
          <span className="nav-right-divider" aria-hidden="true" />
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-contact-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
          <Link to="/apply" className="nav-apply-btn">
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="mobile-toggle"
          aria-label="Toggle Navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
        <Link
          to="/apply"
          className="nav-apply-btn"
          style={{ marginTop: '0.5rem' }}
          onClick={() => setMenuOpen(false)}
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
}
