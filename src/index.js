import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import configureStore from './store'
import * as serviceWorker from './serviceWorker'

const rootEl = document.getElementById('root')

const store = configureStore()

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootEl
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}

serviceWorker.unregister()
