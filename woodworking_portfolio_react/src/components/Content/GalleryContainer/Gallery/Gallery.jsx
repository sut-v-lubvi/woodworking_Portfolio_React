import React from "react";
import s from "./Gallery.module.css";
import { NavLink } from "react-router-dom";

const Gallery = (props) => {
  let addDataSingleElement = (id) => () => {
    console.log(1);
    props.addSingleData(id);
  };

  let newPhotoArray = props.PhotoArray.map((e, i) => (
    <div key={i} className={s.photo__block}>
      <NavLink className={s.link} to={"/single/" + e.id}>
        <img onClick={addDataSingleElement(e.id)} src={e.url} />
      </NavLink>
    </div>
  ));
  return (
    <div className={s.container}>
      <div className={s.flex__container}>{newPhotoArray}</div>
    </div>
  );
};

export default Gallery;
