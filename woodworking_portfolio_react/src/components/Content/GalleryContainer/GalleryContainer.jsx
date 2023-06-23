import React from "react";
import Gallery from "./Gallery/Gallery";
import { connect } from "react-redux";
import { addDataSingleCreator } from "../../../Redux/galleryDataReducers";

let mapStateToProps = (state) => {
  return {
    PhotoArray: state.galleryData.galleryPhotoData.PhotoArray,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addSingleData(id) {
      dispatch(addDataSingleCreator(id));
    },
  };
};
const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;
