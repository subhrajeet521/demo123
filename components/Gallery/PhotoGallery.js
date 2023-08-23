import React, { useState } from "react";
import { FSLightbox } from "fslightbox-react";
import { photos } from "./photos";

export default function PhotoGallery() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0,
  });

  const openLightbox = (slide) => {
    setLightboxController({ toggler: !lightboxController.toggler, slide });
  };

  return (
    <div>
      <div className="gallery">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.title}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>
      <FSLightbox
        toggler={lightboxController.toggler}
        sources={photos.map((photo) => photo.src)}
        slide={lightboxController.slide}
      />
    </div>
  );
}
