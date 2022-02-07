// here will be Redux store...

import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
//import createSagaMiddleware from "redux-saga";

//const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  generalData: {
    fullname: '',
    teaser: '',
    email: '',
    github: '',
    position: '',
    NOC: ''
  },
  technicalStack: [],
  experience: [],
  languages: []
}

const SET_GENERAL = "SET_GENERAL";

const reducer = (state = defaultState, action) => {
  switch(action.type) {

    case SET_GENERAL: {
      return {...state, generalData: {...action.payload} }
    }

    default: return state;
  }
}

export const setGeneralAction = (payload) => ({type: SET_GENERAL, payload});

// const composedEnchancer = compose(applyMiddleware(sagaMiddleware), composeWithDevTools());
// applyMiddleware should be first otherwise sagas won`t work
export const store = createStore(reducer, undefined, composeWithDevTools());
// sagaMiddleware.run(rootSaga);
