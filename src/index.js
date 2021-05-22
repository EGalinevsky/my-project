import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './redux/redux-store'
import App from './App';
import reportWebVitals from './reportWebVitals';


let rerender = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(store.getState())
store.subscribe(()=>{
  let state = store.getState()
  rerender(state)
})

