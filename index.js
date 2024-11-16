const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMIddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
	return {
		type: BUY_CAKE,
		info: 'First redux action'
	}
}

function buyIceCream() {
	return {
		type: BUY_ICECREAM,
		info: 'First redux action'
	}
}

// (previousState, action) => newState

// const intialState = {
// 	numOfCakes: 10,
// 	numOfIceCreams: 20
// }

const intialCakeState = {
	numOfCakes: 10
}

const intialIceCreamState = {
	numOfIceCreams: 20
}

// const reducer = (state = intialState, action) => {
// 	switch(action.type) {
// 		case BUY_CAKE: return {
// 			...state,
// 			numOfCakes: state.numOfCakes - 1
// 		}

// 		case BUY_ICECREAM: return {
// 			...state,
// 			numOfIceCreams: state.numOfIceCreams - 1
// 		}

// 		default: return state
// 	} 
// }

const cakeReducer = (state = intialCakeState, action) => {
	switch(action.type) {
		case BUY_CAKE: return {
			...state,
			numOfCakes: state.numOfCakes - 1
		}

		default: return state
	} 
}

const iceCreamReducer = (state = intialIceCreamState, action) => {
	switch(action.type) {
		case BUY_ICECREAM: return {
			...state,
			numOfIceCreams: state.numOfIceCreams - 1
		}

		default: return state
	} 
}

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMIddleware(logger))
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
