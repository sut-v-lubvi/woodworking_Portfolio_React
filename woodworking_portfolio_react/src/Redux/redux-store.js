import { combineReducers, legacy_createStore } from "redux";
import galleryDataReducers from "./galleryDataReducers";
import aboutEachElementDataReducers from "./aboutEachElementDataReducers";

let reducers = combineReducers({
  galleryData: galleryDataReducers,
  aboutEachElementData: aboutEachElementDataReducers,
});

const saveState = (state) => {
  try {
    // Convert the state to a JSON string
    const serialIsEdState = JSON.stringify(state);

    // Save the serialIsEdState state to localStorage against the key 'app_state'
    window.localStorage.setItem("app_state", serialIsEdState);
  } catch (err) {
    // Log errors here, or ignore
  }
};

const loadState = () => {
  try {
    // Load the data saved in localStorage, against the key 'app_state'
    const serialIsEdState = window.localStorage.getItem("app_state");

    // Passing undefined to createStore will result in our app getting the default state
    // If no data is saved, return undefined
    if (!serialIsEdState) return undefined;

    // De-serialise the saved state, and return it.
    return JSON.parse(serialIsEdState);
  } catch (err) {
    // Return undefined if localStorage is not available,
    // or data could not be de-serialised,
    // or there was some other error
    return undefined;
  }
};

/**
 * This is where you create the app store
 */
const oldState = loadState();

let store = legacy_createStore(reducers, oldState);

store.subscribe(() => {
  saveState(store.getState());
});
// window.store = store;
export default store;
