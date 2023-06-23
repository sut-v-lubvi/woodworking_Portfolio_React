import React from "react";
import s from "./PhotoElement.module.css";

const PhotoElement = () => {
  return (
    <div>
      <div class={s.column__element}>
        <div class={s.column__photo}>
          <img src="#" alt="" />
        </div>
        <div class={s.column__title}>НАЗВАНИЕ ИЗДЕЛИЯ</div>
      </div>
    </div>
  );
};

export default PhotoElement;
