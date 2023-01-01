import { TYPES } from "./type";

export const setFirstObj = () => async (dispatch) => {
  dispatch({
    type: TYPES.SET_FIRST_OBJ,
    payload: true,
  });
};

export const setSecondObj = () => async (dispatch) => {
  dispatch({
    type: TYPES.SET_SECOND_OBJ,
    payload: true,
  });
}
export const setSceneV = (payload) => async(dispatch) =>{
  dispatch({
    type:TYPES.SET_FIRST_SCENE,
    payload:payload
  })
}

export const setThirdObj = () => async (dispatch) => {
  dispatch({
    type: TYPES.SET_THIRD_OBJ,
    payload: true,
  });
};
export const setForthObj = () => async (dispatch) => {
  dispatch({
    type: TYPES.SET_FORTH_OBJ,
    payload: true,
  });
};

export const setFirstLine = (payload) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_FIRST_LINE,
    payload: payload,
  });
};

export const setSecondLine = (payload) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_SECOND_LINE,
    payload: payload,
  });
};

export const setThirdLine = (payload) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_THIRD_LINE,
    payload: payload,
  });
};

export const setObj = (payload) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_OBJECTIF,
    payload: payload,
  });
};
//SET_SECOND_SCENE
export const setSecondScene = (payload) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_SECOND_SCENE,
    payload: payload,
  });
};
export const setFullScreen = (payload) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_FULLSCREEN,
    payload: payload,
  });
  // setTimeout(() => {
  //   dispatch({
  //     type: TYPES.SET_FULLSCREEN,
  //     payload: false,
  //   });
  // }, 500);
};
export const setFiver = (payload) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_FIVEM_TIMER,
    payload: payload,
  });
};

export const setTwo = (payload) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_TWOM_TIMER,
    payload: payload,
  });
};

export const setTimer = (payload) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_TIMER,
    payload: payload,
  });
};

export const setScene = (payload) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_SCENE,
    payload: payload,
  });
};
