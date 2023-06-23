import React from "react";
import s from "./Content.module.css";
import GalleryContainer from "./GalleryContainer/GalleryContainer";
import ProductCardContainer from "./ProductCardContainer";
import { Route, Router, Routes } from "react-router-dom";

const Content = (props) => {
  let newRoutesArray = props.PhotoArray.map((e, i) => (
    <Route
      key={i}
      path={"/single/" + e.id}
      element={<ProductCardContainer />}
    />
  ));
  return (
    <Routes>
      <Route path="/" element={<GalleryContainer />} />
      {newRoutesArray}
    </Routes>
  );
};

export default Content;
