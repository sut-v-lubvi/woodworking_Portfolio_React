import { sliderKitchenDataArray, sliderStairsDataArray } from "./sliderData";
import { kitchenArray, stairsArray } from "./stairsPhotoArray";

const ADD_PHOTO = "ADD_PHOTO";
const ADD = "ADD";
export const addPhotoStairsCreator = (id) => {
  return { type: ADD_PHOTO, id };
};
export const addDataSingleCreator = (id) => {
  return { type: ADD, id };
};
let initialState = {
  galleryPhotoData: {
    PhotoArray: stairsArray,
    photoSliderArray: sliderStairsDataArray,
    sliderData: {},
  },
};
let galleryDataReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHOTO: {
      if (action.id === 1) {
        let newState = { ...state };
        newState.galleryPhotoData = { ...state.galleryPhotoData };
        newState.galleryPhotoData.PhotoArray = [
          ...state.galleryPhotoData.PhotoArray,
        ];
        newState.galleryPhotoData.PhotoArray = stairsArray;
        newState.galleryPhotoData.photoSliderArray = {
          ...state.galleryPhotoData.photoSliderArray,
        };
        newState.galleryPhotoData.photoSliderArray = sliderStairsDataArray;
        return newState;
      }
      if (action.id === 2) {
        let newState = { ...state };
        newState.galleryPhotoData = { ...state.galleryPhotoData };
        newState.galleryPhotoData.PhotoArray = [
          ...state.galleryPhotoData.PhotoArray,
        ];
        newState.galleryPhotoData.PhotoArray = kitchenArray;
        newState.galleryPhotoData.photoSliderArray = {
          ...state.galleryPhotoData.photoSliderArray,
        };
        newState.galleryPhotoData.photoSliderArray = sliderKitchenDataArray;
        return newState;
      }
    }
    case ADD: {
      let newState = { ...state };
      newState.galleryPhotoData = { ...state.galleryPhotoData };
      newState.galleryPhotoData.sliderData = {
        ...state.galleryPhotoData.sliderData,
      };
      newState.galleryPhotoData.sliderData =
        newState.galleryPhotoData.photoSliderArray[action.id];
      return newState;
    }
    default:
      console.log(state);
      return state;
  }
};

export default galleryDataReducers;
