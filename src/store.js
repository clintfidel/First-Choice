import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducers';

function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem("state");
  
      if (serializedState === null) return undefined;
  
      return JSON.parse(serializedState);
    } catch (e) {
      console.log(e);
  
      return undefined;
    }
  }
  
  const persistedState = loadFromLocalStorage();
  
  /**
   * Create a Redux store that holds the app state.
   */
  const store = createStore(
    rootReducer,
    persistedState,
    compose(
      applyMiddleware(thunkMiddleware),
  
      //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

export default store;