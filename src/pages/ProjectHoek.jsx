import SubpageLayout from '../components/SubpageLayout';
import { LazyVideo, RevealImage } from '../components/LazyMedia';

export default function ProjectHoek() {
  return (
    <SubpageLayout
      number="[ 4 ]"
      title="visual identification HOEK"
      pageTitle="HOEK | Patrycja Moeller"
    >
      <main>
        <section className="project-hero">
          <div className="project-hero-media">
            <RevealImage src="/images/hoek_section1.jpg" alt="HOEK magazine spread" eager />
          </div>
          <div className="project-hero-content">
            <span className="project-hero-label">HOEK</span>
            <h1 className="project-hero-title">
              Comprehensive visual identity for the brand
              <br />
              Lifestyle magazine.
            </h1>
            <div className="project-hero-tags">
              <span>Adobe CC</span>
              <span>Figma</span>
            </div>
          </div>
        </section>

        <section className="text-hero">
          <div className="text-hero-content">
            <p>
              HOEK is an integrated project that combines urban narrative with street aesthetics,
              extending across various media: print, fashion, and web. It represents a modern
              approach to visual design, where the magazine becomes a cultural statement, the
              clothing acts as a carrier of identity, and the website serves as a digital archive
              and distribution platform.
            </p>
            <div className="text-hero-block">
              <h3 className="text-hero-heading">The Challenge</h3>
              <p>A desire to create a brand that combines fashion with culture.</p>
            </div>
            <div className="text-hero-block">
              <h3 className="text-hero-heading">The Goal</h3>
              <p>
                To create a complete, cohesive visual identity that works effectively in both
                print and digital media.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="picture1">
            <div className="photo1">
              <RevealImage src="/images/hoek-after-small.gif" alt="hoek-after" />
            </div>
          </div>

          <nav className="cover">
            <div className="magazine">
              <RevealImage src="/images/magazine_cover.png" alt="magazine_cover" />
            </div>
            <div className="magazine">
              <RevealImage src="/images/back_cover.png" alt="back_cover" />
            </div>
          </nav>
        </section>

        <section id="book">
          {['book1.png', 'book2.png', 'book3.png', 'book4.png', 'book5.png', 'book6.png'].map(
            (file, idx) => (
              <div className="bkk" key={file}>
                <RevealImage src={`/images/${file}`} alt={`book${idx + 1}`} />
              </div>
            )
          )}
        </section>

        <section className="text-hero">
          <div className="text-hero-content">
            <p>
              I conducted my own interviews with a local painter and a girl who skateboards.
              Additionally, I incorporated excerpts from interviews from other sources (blogs,
              podcasts). These stories became the core of the magazine’s content, they added
              authenticity and showed that HOEK is not just an aesthetic, but real voices.
            </p>
          </div>
        </section>

        <div className="all">
          <RevealImage className="all_image" src="/images/mockup_hoek.jpg" alt="HOEK mockup" />
        </div>

        <section className="text-hero">
          <div className="text-hero-content">
            <div className="text-hero-block">
              <h3 className="text-hero-heading">Moodboard</h3>
              <p>
                The moodboard was created as the starting point for the entire HOEK visual
                identity. It brought together photographs, textures, typography experiments,
                magazine spreads, street tags, skate culture references, details and underground
                zine brutalist architecture aesthetics.
              </p>
            </div>
          </div>
        </section>

        <div className="all">
          <RevealImage
            className="all_image"
            src="/images/hoek_moodboard.jpg"
            alt="HOEK moodboard"
          />
        </div>

        <section className="text-hero">
          <div className="text-hero-content">
            <p>
              The website serves as a dedicated platform for selling the limited clothing
              collection inspired by the project&apos;s raw, urban aesthetic. It acts as a
              complement to the primary medium — the printed magazine.
            </p>
          </div>
        </section>

        <div className="whole_block">
          <LazyVideo src="/videos/clothes.mp4" width="60%" />
        </div>

        <div className="hoek-web-showcase">
          <RevealImage
            className="hoek-web-image hoek-web-left"
            src="/images/hoek_web1.jpg"
            alt="hoek_web1"
          />
          <RevealImage
            className="hoek-web-image hoek-web-right"
            src="/images/hoek_web2.jpg"
            alt="hoek_web2"
          />
        </div>

        <section className="text-hero">
          <div className="text-hero-content">
            <div className="text-hero-block">
              <h3 className="text-hero-heading">What was created?</h3>
              <p>
                HOEK Magazine – a physical edition (cover hand-spray-painted) Website – a
                dedicated platform for selling a limited clothing collection. T-shirts – a
                limited series of shirts featuring the HOEK logo and graphics. Stickers – a
                sticker pack with logo variations. Posters – a series of promotional and artistic
                posters.
              </p>
            </div>
          </div>
        </section>

        <div className="all">
          <RevealImage
            className="all_image"
            src="/images/hoek_stickers.png"
            alt="HOEK stickers"
          />
        </div>

        <section className="text-hero">
          <div className="text-hero-content">
            <div className="text-hero-block">
              <p>
                The poster creation process was inspired by experimenting with a scanner. Instead
                of classic digital design, I put into the scanner physical elements: hand-drawn
                tags, cut pieces of paper. Intentionally I moved objects during scanning, lightly
                I lifted the cover in order to let in light, I applied layers multiple times and
                extremely I changed contrast. These raw scans became the base for the posters.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="whole_block">
            <LazyVideo src="/videos/hoek_poster.mp4" width="100%" />
          </div>
        </section>

        <section className="text-hero">
          <div className="text-hero-content">
            <div className="text-hero-block">
              <p>
                The T-shirts were made using screen printing. They were purchased second-hand and
                then screen-printed.
              </p>
            </div>
          </div>
        </section>

        <div className="all_80">
          <RevealImage
            className="all_image_80"
            src="/images/hoek_t-shirt2.jpg"
            alt="HOEK T-shirt"
          />
          <RevealImage className="all_image" src="/images/hoek_grass.jpg" alt="HOEK grass" />
          <RevealImage className="all_image" src="/images/hoek_hoek.jpg" alt="HOEK detail" />
        </div>

        <section className="text-hero">
          <div className="text-hero-content">
            <div className="text-hero-block">
              <h3 className="text-hero-heading">Outcomes</h3>
              <p>
                The project resulted in a cohesive multi-medium brand that bridges print culture
                and street fashion. I learned the power of authentic, hands-on elements (like
                hand-sprayed covers and real interviews) in building emotional connection.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="whole_block">
            <LazyVideo src="/videos/hoek_animation.mp4" width="60%" />
          </div>
        </section>
      </main>
    </SubpageLayout>
  );
}
