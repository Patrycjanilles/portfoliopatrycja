import { useEffect, useRef, useState } from 'react';

/**
 * LazyVideo mounts and plays video only when close to the viewport,
 * pausing it when scrolled away to save bandwidth and CPU/GPU.
 */
export function LazyVideo({ src, poster, className, width, eager = false }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { rootMargin: '250px 0px', threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      className={className}
      width={width}
      autoPlay={shouldLoad}
      muted
      loop
      playsInline
      preload={eager ? 'metadata' : 'none'}
    />
  );
}

/**
 * RevealImage applies the smooth scroll-reveal animation and native lazy loading.
 */
export function RevealImage({
  src,
  alt = '',
  className = '',
  eager = false,
  sources = [],
}) {
  const imgRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const combinedClass = `${className} scroll-reveal ${visible ? 'is-visible' : ''}`.trim();

  if (sources.length > 0) {
    return (
      <picture>
        {sources.map((s) => (
          <source key={s.media || s.srcSet} srcSet={s.srcSet} media={s.media} />
        ))}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={combinedClass}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </picture>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={combinedClass}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
