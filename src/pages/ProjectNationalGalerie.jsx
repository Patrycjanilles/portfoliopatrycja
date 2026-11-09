import SubpageLayout from '../components/SubpageLayout';
import { LazyVideo, RevealImage } from '../components/LazyMedia';

export default function ProjectNationalGalerie() {
  return (
    <SubpageLayout
      number="[ 2 ]"
      title="national galerie"
      pageTitle="National Galerie | Patrycja Moeller"
    >
      <main>
        <section className="text">
          <div className="visual-raw">
            <RevealImage
              src="/images/nationalGalerie.png"
              alt="nationalGalerie"
              className="national-galerie-img"
              eager
            />
          </div>
        </section>

        <section className="gradient-section">
          <div className="pink-gradient" />
          <RevealImage
            className="berlin-photo"
            src="/images/berlin_national1800.jpg"
            alt="berlin-national-image"
            eager
          />
        </section>

        <section>
          <div className="two-raw">
            <div className="column left">Visual identity of a contemporary art exhibition.</div>
            <div className="column right">
              A comprehensive visual identity project created for an exhibition at Berlin&apos;s
              National Galerie. The design is distinguished by a minimalist yet striking
              aesthetic that resonates with the character of the museum space. Additionally, a
              dedicated website and an animation were developed to complement the
              exhibition&apos;s visual identity and extend its presence into the digital space.
            </div>
          </div>
        </section>

        <section className="video-center">
          <LazyVideo src="/videos/berlin-galerie-film.mp4" />
        </section>

        <section className="leaflet">
          <RevealImage src="/images/berlin0.jpg" alt="berlin-leaflet" />
        </section>

        <section>
          <div className="two-photo">
            <RevealImage src="/images/berlin-graphic.jpg" alt="poster" />
            <RevealImage src="/images/berlin2.jpg" alt="photo-leaflet" />
          </div>
        </section>
      </main>
    </SubpageLayout>
  );
}
