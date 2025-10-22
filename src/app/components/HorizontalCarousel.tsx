import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  { src: "/example.png", alt: "Hero Image 1" },
  { src: "/example.png", alt: "Banner Image" },
  { src: "/example.png", alt: "Example Image" },
  { src: "/example.png", alt: "FAQ Image" },
];

export function HorizontalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[300px] h-[450px] ">
      {images.map((image, index) => {
        const isActive = index === currentIndex;
        const isNext = index === (currentIndex + 1) % images.length;
        const isPrev =
          index === (currentIndex - 1 + images.length) % images.length;

        let translateX = 0;
        let opacity = 0;
        let scale = 0.8;
        let zIndex = 1;

        if (isActive) {
          translateX = 0;
          opacity = 1;
          scale = 1;
          zIndex = 3;
        } else if (isNext) {
          translateX = 100; // Position to the right of current
          opacity = 0.7;
          scale = 0.9;
          zIndex = 2;
        } else if (isPrev) {
          translateX = -100; // Position to the left of current
          opacity = 0.0;
          scale = 0.9;
          zIndex = 2;
        } else {
          // For other images, position them further away and make them more transparent
          const distance =
            (index - currentIndex + images.length) % images.length;
          translateX = distance * 100;
          opacity = 0.3 - distance * 0.05; // Further images are darker
          scale = 0.8;
          zIndex = 1;
        }

        return (
          <div
            key={image.src}
            className="absolute w-full h-full transition-all duration-1000 ease-in-out"
            style={{
              transform: `translateX(${translateX}%) scale(${scale})`,
              opacity: opacity,
              zIndex: zIndex,
              top: 0,
              bottom: "auto",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded"
              style={{ objectFit: "cover" }}
            />
          </div>
        );
      })}
    </div>
  );
}
