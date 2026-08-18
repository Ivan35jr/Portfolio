import { useState } from "react";
import "./ProjectImageCarousel.css";

type Props = {
  images: string[];
  alt: string;
};

export default function ProjectImageCarousel({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);
  const [broken, setBroken] = useState<Record<number, boolean>>({});

  if (images.length === 0) {
    return (
      <div className="carousel carousel--empty" aria-hidden="true">
        <span>IMAGE / SCREENSHOT</span>
      </div>
    );
  }

  const goTo = (i: number) => setCurrent((i + images.length) % images.length);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={alt}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {broken[current] ? (
        <div className="carousel__fallback">
          <span>{alt} — image {current + 1}</span>
        </div>
      ) : (
        <img
          className="carousel__image"
          src={images[current]}
          alt={`${alt} — screenshot ${current + 1} of ${images.length}`}
          onError={() => setBroken((b) => ({ ...b, [current]: true }))}
        />
      )}

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--prev"
            onClick={prev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--next"
            onClick={next}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="carousel__dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel__dot ${i === current ? "carousel__dot--active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === current}
              />
            ))}
          </div>

          <span className="carousel__counter">
            {current + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}
