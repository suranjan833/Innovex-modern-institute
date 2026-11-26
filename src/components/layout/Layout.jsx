import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Shared page wrapper providing consistent header, main content slot, and footer.
 */
export default function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
