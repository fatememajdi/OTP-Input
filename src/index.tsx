/* eslint-disable @typescript-eslint/consistent-type-imports */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// ---------------------------------------------------css
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from './redux/reducer'

const store: Store<dialog, dialogAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>

)
