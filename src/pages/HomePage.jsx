import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CursorStage from '../components/CursorStage';
import { LazyVideo, RevealImage } from '../components/LazyMedia';

export default function HomePage() {
  const [spotifyOpen, setSpotifyOpen] = useState(false);

  useEffect(() => {
    document.title = 'Patrycja Moeller | Creative Designer & Web Developer';
  }, []);

  return (
    <div className="home-layout">
      <CursorStage />

      <header className="home-header">
        <h1>Patrycja Moeller</h1>
        <h2>Web Developer</h2>
      </header>

      <main id="content">
        <div className="selected-projects">Selected Projects</div>
        <div className="project-heading">PROJECT</div>

        {/* Project 5: FridgeBook */}
        <div className="project">
          <div className="number">[ 5 ]</div>
          <nav className="gallery">
            <a
              href="https://fridgecook-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RevealImage
                src="/images/fridgebook-cover.jpg"
                alt="FridgeBook app preview"
                eager
              />
            </a>
          </nav>
        </div>
        <div className="caption">FridgeBook</div>
        <div className="discription">
          Recipe app: add what’s in the fridge and see what you can cook. Built with React,
          TypeScript, React Router, and Supabase.
          <br />
          <a
            className="fridgebook-code-link"
            href="https://github.com/Patrycjanilles/fridgecook"
            target="_blank"
            rel="noopener noreferrer"
          >
            View code
          </a>
        </div>

        {/* Project 4: Speakly */}
        <div className="project">
          <div className="number">[ 4 ]</div>
          <div className="gallery">
            <Link to="/project4">
              <LazyVideo
                src="/videos/Speakly_web.mp4"
                poster="/images/cover.jpg"
                eager
              />
            </Link>
          </div>
        </div>
        <div className="caption">Speakly</div>
        <div className="discription">
          Speakly is a platform that allows you to transcribe your voice to text.
        </div>

        {/* Project 3: HOEK */}
        <div className="project">
          <div className="number">[ 3 ]</div>
          <nav className="gallery">
            <Link to="/project1">
              {/* Plain <img> on purpose: <source> tags inside <picture> would override the GIF. */}
              <RevealImage
                src="/images/t-shirt-small.gif"
                alt="HOEK collection preview"
              />
            </Link>
          </nav>
        </div>
        <div className="caption">HOEK</div>
        <div className="discription">
          HOEK is a multidimensional concept encompassing a printed magazine, visual identity,
          website, and clothing collection, focusing on urban aesthetics, street culture, and
          contemporary design.
        </div>

        {/* Project 2: National Galerie */}
        <div className="project">
          <div className="number">[ 2 ]</div>
          <div className="gallery">
            <Link to="/project3">
              <RevealImage
                src="/images/berlin800.jpg"
                alt="National Galerie Berlin"
                sources={[
                  { srcSet: '/images/berlin400.jpg', media: '(max-width: 400px)' },
                  { srcSet: '/images/berlin800.jpg', media: '(max-width: 800px)' },
                  { srcSet: '/images/berlin1200.jpg', media: '(max-width: 1200px)' },
                ]}
              />
            </Link>
          </div>
        </div>
        <div className="caption">National Galerie</div>
        <div className="discription">
          A comprehensive visual identity project for a contemporary art exhibition at the
          National Galerie in Berlin.
        </div>

        {/* Project 1: Some stuff */}
        <div className="project">
          <div className="number">[ 1 ]</div>
          <div className="gallery">
            <Link to="/project2">
              <RevealImage
                src="/images/bill1200.jpg"
                alt="Some stuff creative explorations"
                sources={[
                  { srcSet: '/images/bill400.jpg', media: '(max-width: 400px)' },
                  { srcSet: '/images/bill800.jpg', media: '(max-width: 800px)' },
                  { srcSet: '/images/bill1200.jpg', media: '(max-width: 1200px)' },
                  { srcSet: '/images/bill1800.jpg', media: '(max-width: 1800px)' },
                ]}
              />
            </Link>
          </div>
        </div>
        <div className="caption">Some stuff</div>
        <div className="discription">
          A selection of personal and experimental projects, a glimpse into my creative process
          and visual explorations.
        </div>
      </main>

      <div id="info">
        <div className="discription-me">
          Patrycja Moeller is a junior frontend and UI developer with a graphic design
          background. She builds interfaces from design to code.
        </div>
        <div className="about">
          <Link to="/about" className="about_link">
            More
          </Link>
        </div>

        <div className="links">
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

        <div className="spotify">
          <button
            type="button"
            className="spotify-toggle"
            onClick={() => setSpotifyOpen((prev) => !prev)}
          >
            <span className={`play-icon ${spotifyOpen ? 'playing' : ''}`.trim()}>
              {spotifyOpen ? '⏸' : '▶'}
            </span>
            Spotify
          </button>

          {spotifyOpen && (
            <div className="spotify-player">
              <iframe
                title="Patrycja Moeller Spotify Playlist"
                src="https://open.spotify.com/embed/playlist/7qZxxRljzpalMW42v84r1I?utm_source=generator&theme=0"
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          )}
        </div>

        <footer id="footer">
          <div className="copiright">
            All rights reserved.
            <br />© Patrycja Moeller, 2025
          </div>
        </footer>
      </div>

      <footer id="footer-mobile">
        <div className="footer-contact-text">Feel free to get in touch</div>
        <div className="footer-contact-info">
          <a href="mailto:hello@patrycjamoeller.com">hello@patrycjamoeller.com</a>
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
