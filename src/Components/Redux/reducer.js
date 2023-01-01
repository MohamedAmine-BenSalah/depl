import { TYPES } from "./type";

const initialState = {
  setObject: true,
  setScene: false,
  timer: false,
  firstObj: false,
  secondObj: false,
  thirdObj: false,
  forthObj: false,
  firstObjLine: true,
  secondObjLine: false,
  thirdObjLine: false,
  forthObj: false,
  fiveTimer: true,
  twoTimer: false,
  firstScene: true,
  secondScene: false,
  setVideo: false,
  isFullScreen: false,
  

};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_FIRST_LINE:
      return {
        ...state,
        firstObjLine: action.payload,
      };
    case TYPES.SET_FULLSCREEN:
      return {
        ...state,
        isFullScreen: action.payload,
      };
    case TYPES.SET_FIRST_SCENE:
      return {
        ...state,
        firstScene: action.payload,
      };
    case TYPES.SET_SECOND_SCENE:
      return {
        ...state,
        secondScene: action.payload,
      };
    case TYPES.SET_VIDEOORSCENE:
      return {
        ...state,
        setVideo: action.payload,
      };
    case TYPES.SET_TWOM_TIMER:
      return {
        ...state,
        twoTimer: action.payload,
      };
    case TYPES.SET_FIVEM_TIMER:
      return {
        ...state,
        fiveTimer: action.payload,
      };

    case TYPES.SET_SECOND_LINE:
      return {
        ...state,
        secondObjLine: action.payload,
      };
    case TYPES.SET_THIRD_LINE:
      return {
        ...state,
        thirdObjLine: action.payload,
      };
    case TYPES.SET_FIRST_OBJ:
      return {
        ...state,
        firstObj: action.payload,
      };
    case TYPES.SET_SECOND_OBJ:
      return {
        ...state,
        secondObj: action.payload,
      };
    case TYPES.SET_THIRD_OBJ:
      return {
        ...state,
        thirdObj: action.payload,
      };
    case TYPES.SET_FORTH_OBJ:
      return {
        ...state,
        forthObj: action.payload,
      };
    case TYPES.SET_OBJECTIF:
      return {
        ...state,
        setObject: action.payload,
      };
    case TYPES.SET_SCENE:
      return {
        ...state,
        setScene: action.payload,
      };
    case TYPES.SET_TIMER:
      return {
        ...state,
        timer: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
