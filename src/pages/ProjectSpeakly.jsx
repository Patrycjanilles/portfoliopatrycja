import SubpageLayout from '../components/SubpageLayout';
import { LazyVideo, RevealImage } from '../components/LazyMedia';

export default function ProjectSpeakly() {
  return (
    <SubpageLayout
      number="[ 3 ]"
      title="Speakly"
      pageTitle="Speakly | Patrycja Moeller"
    >
      <main className="speakly_main">
        <section className="speakly_foto">
          <RevealImage src="/images/cover.jpg" alt="speakly_foto" eager />
          <p className="text_speakly">Speakly</p>
        </section>

        <section className="speakly_hero">
          <p>
            Responsive landing page
            <br /> for an AI meeting assistant
          </p>
          <div className="project-hero-tags-web">
            <span>Figma</span>
            <span>GitHub</span>
            <span>HTML/CSS/JS</span>
          </div>
        </section>

        <section className="speakly_visit_button">
          <a
            href="https://patrycjanilles.github.io/speakly-website/"
            target="_blank"
            rel="noopener noreferrer"
            className="speakly_visit_link"
          >
            Visit Speakly
            <svg
              className="speakly_arrow"
              width="34"
              height="32"
              viewBox="0 0 39 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0.999908 17.5809L37.0247 18.3972M37.0247 18.3972L19.6275 35.0234M37.0247 18.3972L20.3985 1.00002"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section>

        <section className="speakly_text_web">
          <p className="speakly_text_web_margin">
            About
            <br />
            Speakly is an innovative AI-powered tool designed to streamline business meetings. I
            took on the task of creating a landing page for the product. The page aimed to
            showcase Speakly’s key features in a simple, engaging, and persuasive way,
            encouraging users to try the tool. The project was implemented as a single-page
            application hosted on GitHub Pages, allowing for fast deployment and easy iteration.
          </p>
          <p className="speakly_text_web_margin">
            Role
            <br />
            UI/UX Designer and Frontend Developer.
          </p>
          <p className="speakly_text_web_margin">
            Challenge
            <br />
            Design a page that quickly convinces users to download the app, without overwhelming
            them with content, while providing an intuitive UX.
          </p>
        </section>

        <section className="speakly-video-web">
          <LazyVideo src="/videos/speakly-video.mp4" />
        </section>

        <section className="speakly_text_web">
          <p className="speakly_text_web_margin">
            Logo
            <br />
            For the Speakly project, I designed a minimalist, modern logo that combines
            simplicity with the dynamic nature of language learning. I chose a fresh blue
            gradient that evokes associations with technology. The design remains highly legible
            at small sizes, making the logo versatile.
          </p>
          <p className="speakly_text_web_margin">
            Wireframing
            <br />I started with hand-drawn sketches and then created wireframes in Figma.
          </p>
        </section>

        <section className="speakly_foto2">
          <div className="speakly_foto">
            <RevealImage src="/images/speakly_images1.jpg" alt="speakly_logo" />
            <RevealImage src="/images/speakly_images2.jpg" alt="speakly_wireframes" />
          </div>
        </section>

        <section className="speakly_text_web">
          <p className="speakly_text_web_margin">
            Research
            <br />
            Understanding the needs of AI meeting assistant users and analyzing how market
            leaders communicate value on their landing pages.
          </p>
        </section>

        <section>
          <div className="speakly_foto2">
            <div className="speakly-video-web">
              <LazyVideo src="/videos/speakly_video2.mp4" />
            </div>
            <div className="speakly_foto">
              <RevealImage src="/images/speakly_images4.jpg" alt="speakly_research" />
            </div>
          </div>
        </section>
      </main>
    </SubpageLayout>
  );
}
