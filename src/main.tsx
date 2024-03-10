import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './movieApp/store/store'
import { AppRoute } from './routes/AppRoute'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <AppRoute/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
