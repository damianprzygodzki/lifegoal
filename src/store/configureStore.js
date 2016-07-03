import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'

export default function configureStore(history){

    const persistedState = localStorage.getItem('lifeGoalStore') ? {goalStateHandler: JSON.parse(localStorage.getItem('lifeGoalStore'))} : {}

    const middleware = [thunk, routerMiddleware(history)]
    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(...middleware)
    )

    store.subscribe(()=>{
        localStorage.setItem('lifeGoalStore', JSON.stringify(store.getState().goalStateHandler))
    })

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = rootReducer
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
