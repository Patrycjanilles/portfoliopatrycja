import { useEffect, useRef } from 'react';

const CURSOR_IMAGES = [
  '/images/bill400.jpg',
  '/images/imagesources8.png',
  '/images/cover.jpg',
  '/images/imagesources6.png',
  '/images/grid14.jpg',
  '/images/grid7.jpg',
  '/images/imagesources10.png',
  '/images/grid41.jpg',
  '/images/grid5.jpg',
  '/images/grid35.jpg',
  '/images/imagesources9.png',
  '/images/hoek_grass.jpg',
  '/images/imagesources1.png',
  '/images/imagesources2.png',
  '/images/imagesources3.png',
  '/images/imagesources4.png',
  '/images/imagesources5.jpg',
  '/images/imagesources7.jpg',
  '/images/imagesources11.png',
];

const FRAME_DISTANCE = 12;

export default function CursorStage() {
  const stageRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const cursorImage = imgRef.current;
    if (!stage || !cursorImage) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let bounds = stage.getBoundingClientRect();
    let last = null;
    let distanceBucket = 0;
    let frameIndex = 0;
    let preloaded = false;

    const preloadCursorImages = () => {
      if (preloaded) return;
      preloaded = true;
      CURSOR_IMAGES.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    const updateBounds = () => {
      bounds = stage.getBoundingClientRect();
    };

    const updatePosition = (x, y) => {
      cursorImage.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const advanceFrame = () => {
      frameIndex = (frameIndex + 1) % CURSOR_IMAGES.length;
      cursorImage.src = CURSOR_IMAGES[frameIndex];
    };

    const handleMouseMove = (event) => {
      preloadCursorImages();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;

      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        distanceBucket += Math.hypot(dx, dy);
        while (distanceBucket >= FRAME_DISTANCE) {
          distanceBucket -= FRAME_DISTANCE;
          advanceFrame();
        }
      }

      updatePosition(x, y);
      cursorImage.style.opacity = '1';
      last = { x, y };
    };

    const handleMouseEnter = () => {
      preloadCursorImages();
      cursorImage.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      last = null;
      distanceBucket = 0;
      cursorImage.style.opacity = '0';
    };

    stage.addEventListener('mousemove', handleMouseMove, { passive: true });
    stage.addEventListener('mouseenter', handleMouseEnter);
    stage.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', updateBounds);

    return () => {
      stage.removeEventListener('mousemove', handleMouseMove);
      stage.removeEventListener('mouseenter', handleMouseEnter);
      stage.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateBounds);
    };
  }, []);

  return (
    <div id="cursor-stage" ref={stageRef} aria-hidden="true">
      <img
        ref={imgRef}
        src={CURSOR_IMAGES[0]}
        alt=""
        className="cursor-tetra"
        width={40}
        height={40}
        style={{ opacity: 0 }}
      />
    </div>
  );
}
