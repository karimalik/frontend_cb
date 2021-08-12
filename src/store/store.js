import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'

import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
      ),
    ),
  )

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  }
}
