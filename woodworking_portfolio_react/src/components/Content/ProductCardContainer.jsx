import { connect } from "react-redux";
import React from "react";
import ProductCard from "./ProductCard";
// debugger;
let mapStateToProps = (state) => {
  return {
    sliderData: state.galleryData.galleryPhotoData.sliderData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};
const ProductCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);

export default ProductCardContainer;
