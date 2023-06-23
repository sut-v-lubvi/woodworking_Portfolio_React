import { addPhotoStairsCreator } from "../../Redux/galleryDataReducers";
import { connect } from "react-redux";
import NavMenu from "./NavMenu";
import React from "react";

let mapStateToProps = (state) => {
  return {};
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPhoto(id) {
      dispatch(addPhotoStairsCreator(id));
    },
  };
};
const NavMenuContainer = connect(mapStateToProps, mapDispatchToProps)(NavMenu);

export default NavMenuContainer;
