// src/components/BannerCarousel.js

import React, { useState, useEffect } from "react";
import "./styles.css";

// Updated filenames here:
import Banner1 from "./images/Banner-1.PNG";
import Banner2 from "./images/Banner-2.PNG";
import Banner3 from "./images/Banner-3.PNG";
import Banner4 from "./images/Banner-4.jpg"; // change to .jpg if needed
import Banner5 from "./images/Banner-5.jpg"; 
const BannerCarousel = () => {
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="banner-carousel">
      <img src={images[index]} alt="Knowall Paranormal Banner" className="banner-image" />
    </div>
  );
};

export default BannerCarousel;
