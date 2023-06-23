import Content from "./Content";
import React from "react";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  debugger;
  return {
    PhotoArray: state.galleryData.galleryPhotoData.PhotoArray,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};
const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;
