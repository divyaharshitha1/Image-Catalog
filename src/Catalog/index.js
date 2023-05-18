import React, { useState, useEffect } from "react";

import "./index.css";
const Catalog = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideShowActive, setSlideShowActive] = useState(false);

  useEffect(() => {
    let slideshowTimer;

    if (slideShowActive) {
      slideshowTimer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => {
      clearInterval(slideshowTimer);
    };
  }, [slideShowActive, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImg = (index) => {
    setCurrentIndex(index);
  };

  const toggleSlideShow = () => {
    setSlideShowActive((prevState) => !prevState);
  };

  return (
    <div className="catalog">
      <div className="images-container">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="image"
        />
        <div className="image-details">
          <p className="description">{images[currentIndex].details}</p>
          <button onClick={toggleSlideShow} className="button">
            {slideShowActive ? (
              <img
                className="pause-btn"
                src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1684421351/pause-vector-icon-260nw-1041391603_gnmcf7.jpg"
                alt="pause"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1684421752/play-button-vector-icon-260nw-765928261_psaarm.jpg"
                className="pause-btn"
                alt="play"
              />
            )}
          </button>
        </div>
      </div>
      <div className="controls">
        <button onClick={goToPrevious} className="button2">
          <img
            src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1684422092/free-back-arrow-1767523-1502427_wubmed.png"
            className="pause-btn"
            alt="free-back-arrow"
          />
        </button>
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={index === currentIndex ? "selected" : "not-selected"}
              onClick={() => goToImg(index)}
            />
          ))}
        </div>
        <button className="button2" onClick={goToNext}>
          <img
            src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1684422225/arrow-ios-forward-512_p1j6go.png"
            alt="arrow-ios-forward-512"
            className="play-btn"
          />
        </button>
      </div>
    </div>
  );
};

export default Catalog;
