import {
  ADD_ENTRAINEMENT,
  FOUND_BAD_WORD,
  DELETE_ENTRAINEMENT
} from "../constants/action-types";

const initialState = {
  entrainements: [],
  remoteEntrainements: []
};

export default function entrainements(state = initialState, action) {
  if (action.type === ADD_ENTRAINEMENT) {
    return Object.assign({}, state, {
      entrainements: state.entrainements.concat(action.payload)
    });
  }
  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      entrainements: state.entrainements.concat("Bad word")
    });
  }
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteEntrainements: state.remoteEntrainements.concat(action.payload)
    });
  }

  return state;
}
