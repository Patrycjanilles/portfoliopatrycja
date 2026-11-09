import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SubpageLayout({
  number = '',
  title = '',
  pageClass = '',
  pageTitle = 'Patrycja Moeller | Visual Designer & Web Developer',
  showBackToTop = true,
  showSpotifyInFooter = true,
  children,
}) {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {
    if (!showBackToTop) return;
    const onScroll = () => {
      setShowTopBtn(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showBackToTop]);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`page-layout ${pageClass}`.trim()}>
      <header id="menu">
        <div className="navcontent">
          <span id="number">{number}</span>
          <span id="title">{title}</span>
          <Link id="close" to="/">
            [ close ]
          </Link>
        </div>
      </header>

      {children}

      {showBackToTop && (
        <aside className={`top_button ${showTopBtn ? 'visible' : ''}`.trim()}>
          <button
            type="button"
            onClick={scrollToTop}
            className="back_to_top"
            aria-label="Back to top"
          >
            ↑ back to top
          </button>
        </aside>
      )}

      <footer id="footer_project">
        <div className="footer_project_inner">
          <div className="footer_left">
            <div className="contact_footer">Feel free to get in touch</div>
            {showSpotifyInFooter && (
              <a
                className="footer_spotify_link"
                href="https://open.spotify.com/playlist/55htoEUzjkDIuNXS6I7ldb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify playlist
              </a>
            )}
          </div>
          <div className="contact_footer_links">
            <a href="mailto:moeller.patrycja@gmail.com">moeller.patrycja@gmail.com</a>
            <br />
            <a href="tel:+48794068624">+48794068624</a>
            <br />
            <a
              href="https://www.instagram.com/patry.ofc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>

      <footer id="footer-mobile">
        <div className="footer-contact-text">Feel free to get in touch</div>
        <div className="footer-contact-info">
          <a href="mailto:moeller.patrycja@gmail.com">moeller.patrycja@gmail.com</a>
          <a href="tel:+48794068624">+48794068624</a>
          <a
            href="https://www.instagram.com/patry.ofc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
