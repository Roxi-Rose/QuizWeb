import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * Necessary for adding redux toolkit
 */
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

/**
 * Importing reducers
 */
import quizReducer from './reducers/quizReducer.js'

/**
 * Creating the store w/reducers
 */
const store = configureStore({
  reducer: {
    quiz: quizReducer
  }
})

// Middleware to sync data with localStorage
store.subscribe(() => {
  const { quizData } = store.getState().quiz;
  localStorage.setItem('quizData', JSON.stringify(quizData));
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
