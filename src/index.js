import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import FeedReducer from './store/reducers/FeedReducer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import {persistStore,persistReducer,createMigrate} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reportWebVitals from './reportWebVitals';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducers = combineReducers({
  feed:FeedReducer
  
});
const persistConfig={
  key:'root',
  storage:storageSession,
  whitelist:['feed']
}
const pReducer=persistReducer(persistConfig,RootReducers)
const store = createStore(
pReducer,
  composeEnhancers(applyMiddleware(thunk))
);


  const persistor=persistStore(store);
export{persistor,store}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
