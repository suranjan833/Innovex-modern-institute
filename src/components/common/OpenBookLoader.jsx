import './OpenBookLoader.css';

/**
 * Minimal modern 3D open-book loader with continuously turning pages.
 * Deep navy background, navy cover, ivory pages with subtle gold edges.
 */
export default function OpenBookLoader({ visible }) {
  return (
    <div
      className={`book-loader-overlay ${visible ? '' : 'is-hidden'}`}
      aria-hidden={!visible}
    >
      <div className="open-book-scene">
        <div className="open-book">
          <div className="book-cover" />
          <div className="book-page-stack book-page-stack-left" />
          <div className="book-page-stack book-page-stack-right" />
          <div className="book-turning-page" />
          <div className="book-turning-page book-turning-page-2" />
          <div className="book-turning-page book-turning-page-3" />
          <div className="book-spine-crease" />
        </div>
      </div>
    </div>
  );
}
