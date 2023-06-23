import React, { useState } from "react";
import s from "./ProductCard.module.css";
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
  let slides = props.sliderData.sliderUrlArray;
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className={s.container}>
      <div className={s.flex__container}>
        <div className={s.slider}>
          <div className={s.container__arrow}>
            <img
              onClick={goToPrevious}
              className={s.arrow__left}
              src="http://localhost:3000/strelka.svg"
            ></img>
          </div>
          <div
            className={s.photo}
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          ></div>
          <div className={s.container__arrow}>
            <img
              onClick={goToNext}
              className={s.arrow__right}
              src="http://localhost:3000/strelka.svg"
            ></img>
          </div>
        </div>
        <div className={s.description}>{props.sliderData.description}</div>
      </div>
    </div>
  );
};

export default ProductCard;
