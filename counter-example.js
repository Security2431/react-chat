const { createStore } = require('redux')

const increment = {
  type: 'INCREMENT'
}

const decrement = {
  type: 'DECREMENT'
}

const initialstate = 0

function reducer(state = initialstate, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
  if (store.getState() > 10) {
    unsubscribe()
  }
})

const interval = setInterval(() => {
  store.dispatch(increment)
  if (store.getState() >= 10) {
    clearInterval(interval)
    unsubscribe()
  }
}, 1000)

