import * as types from '../types';

export function buttonRequest() {
  return {
    type: types.BUTTON_REQUEST,
  };
}

export function buttonSuccess() {
  return {
    type: types.BUTTON_SUCCESS,
  };
}

export function buttonFailure() {
  return {
    type: types.BUTTON_FAILURE,
  };
}
