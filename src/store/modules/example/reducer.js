import * as types from '../types';

const initialState = {
  clicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BUTTON_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.clicado = !newState.clicado;
      return newState;
    }

    case types.BUTTON_FAILURE: {
      console.log('Deu erro =(');
      return state;
    }

    case types.BUTTON_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
