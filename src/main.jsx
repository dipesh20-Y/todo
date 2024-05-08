import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './components/store/store.js'
import { Provider } from 'react-redux'
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <Provider store = {store}>
  <CustomProvider theme= 'teal'>
    <App />
  </CustomProvider>
    </Provider>
  
  </React.StrictMode>
)
