// here will be Redux store...

import {createStore} from "redux";
//import {composeWithDevTools} from "redux-devtools-extension";
//import createSagaMiddleware from "redux-saga";

//const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  generalData: {
    title: '',
    teaser: '',
    email: '',
    github: '',
    position: '',
    NOC: undefined
  },
  technicalStack: [],
  experience: [],
  languages: []
}

const SET_TICKER = "SET_TICKER";

const reducer = (state = defaultState, action) => {
  switch(action.type) {

    case SET_TICKER: {
      return {...state, oldValue: [...state.newValue], newValue: [...action.payload] }
    }

    default: return state;
  }
}

export const setTickerAction = (payload) => ({type: SET_TICKER, payload});

// const composedEnchancer = compose(applyMiddleware(sagaMiddleware), composeWithDevTools());
// applyMiddleware should be first otherwise sagas won`t work
export const store = createStore(reducer, undefined, composeWithDevTools());
// sagaMiddleware.run(rootSaga);
