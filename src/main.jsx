import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import studentInformation from './redux/studentInformation'



const store = configureStore({
  reducer: {
    studentInformation
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
)
