import {
  ADD_ENTRAINEMENT,
  FOUND_BAD_WORD,
  DELETE_ENTRAINEMENT
} from "../constants/action-types";

export function addEntrainement(payload) {
  return { type: ADD_ENTRAINEMENT, payload };
}
export function messageBadWord(payload) {
  return { type: FOUND_BAD_WORD, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}

export function deleteEntrainement(payload) {
  return { type: DELETE_ENTRAINEMENT, payload };
}
