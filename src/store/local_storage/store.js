import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer, createTransform } from 'redux-persist'
import promise from 'redux-promise';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { rootReducer } from '../reducers/index'

const persistConfig = {
    key: 'root',
    whiteList: ['movieList'],
    storage,
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



export let store = createStore(persistedReducer, applyMiddleware(promise))
export let persistor = persistStore(store)
