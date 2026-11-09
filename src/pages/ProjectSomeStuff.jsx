import SubpageLayout from '../components/SubpageLayout';
import { LazyVideo, RevealImage } from '../components/LazyMedia';

const GRID_MEDIA = [
  { type: 'img', src: '/images/grid1.jpg' },
  { type: 'img', src: '/images/grid2.jpg' },
  { type: 'img', src: '/images/grid4.gif' },
  { type: 'img', src: '/images/grid3.jpg' },
  { type: 'img', src: '/images/grid7.jpg' },
  { type: 'img', src: '/images/grid5.jpg' },
  { type: 'img', src: '/images/grid6.jpg' },
  { type: 'img', src: '/images/grid8.png' },
  { type: 'img', src: '/images/grid9.jpg' },
  { type: 'img', src: '/images/grid10.jpg' },
  { type: 'img', src: '/images/grid12.JPG' },
  { type: 'img', src: '/images/grid13.jpg' },
  { type: 'video', src: '/videos/grid11.mp4' },
  { type: 'video', src: '/videos/grid14.mp4' },
  { type: 'img', src: '/images/grid27.jpg' },
  { type: 'img', src: '/images/grid39.jpg' },
  { type: 'img', src: '/images/grid36.jpg' },
  { type: 'img', src: '/images/grid15.jpg' },
  { type: 'img', src: '/images/grid48.jpg' },
  { type: 'img', src: '/images/grid40.jpg' },
  { type: 'img', src: '/images/grid16.jpg' },
  { type: 'video', src: '/videos/grid22.mp4' },
  { type: 'img', src: '/images/grid38.jpg' },
  { type: 'img', src: '/images/grid14.jpg' },
  { type: 'video', src: '/videos/grid28.mp4' },
  { type: 'img', src: '/images/grid43.jpg' },
  { type: 'img', src: '/images/grid50.png' },
  { type: 'img', src: '/images/grid26.png' },
  { type: 'video', src: '/videos/grid44.mp4' },
  { type: 'img', src: '/images/grid42.jpg' },
  { type: 'img', src: '/images/grid49.jpg' },
  { type: 'img', src: '/images/grid41.jpg' },
  { type: 'video', src: '/videos/grid18.mp4' },
  { type: 'video', src: '/videos/grid33.mp4' },
  { type: 'video', src: '/videos/grid37.mp4' },
  { type: 'img', src: '/images/grid17.jpg' },
  { type: 'img', src: '/images/grid24.jpg' },
  { type: 'video', src: '/videos/grid29.mp4' },
  { type: 'video', src: '/videos/grid34.mp4' },
  { type: 'img', src: '/images/grid23.jpg' },
  { type: 'img', src: '/images/grid45.png' },
  { type: 'img', src: '/images/grid44.png' },
  { type: 'video', src: '/videos/grid20.mp4' },
  { type: 'video', src: '/videos/grid30.mp4' },
  { type: 'video', src: '/videos/grid19.mp4' },
  { type: 'img', src: '/images/grid46.jpg' },
  { type: 'img', src: '/images/grid47.jpg' },
  { type: 'img', src: '/images/grid25.jpg' },
  { type: 'img', src: '/images/grid31.gif' },
];

export default function ProjectSomeStuff() {
  return (
    <SubpageLayout
      number="[ 1 ]"
      title="Some stuff"
      pageTitle="Some Stuff | Patrycja Moeller"
    >
      <main>
        <section className="text">
          <div className="visual">Some stuff</div>
          <div className="discription1">
            The &quot;Some Stuff&quot; section is a free space within my portfolio where I
            showcase a variety of graphic and visual projects from photography and typography
            experiments to multimedia work. It’s a place for more informal, spontaneous, and
            sometimes experimental pieces, documenting my creative process, inspirations, and
            ongoing development.
          </div>
        </section>

        <section>
          <div className="photo-grid">
            {GRID_MEDIA.map((item, idx) =>
              item.type === 'video' ? (
                <LazyVideo key={item.src} src={item.src} />
              ) : (
                <RevealImage
                  key={item.src}
                  src={item.src}
                  alt={`Visual experiment ${idx + 1}`}
                  eager={idx < 6}
                />
              )
            )}
          </div>
        </section>
      </main>
    </SubpageLayout>
  );
}
