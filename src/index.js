import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './redux/redux-store'
import App from './App';
import { Provider } from "react-redux"


let rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App store={store}/>
      </Provider>

    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(store.getState())
store.subscribe(() => {
  let state = store.getState()
  rerender(state)
})

