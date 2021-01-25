import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import cat from './catReducers'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'cat',
  storage
}


const rootReducer = combineReducers({
  cat
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: any = createStore(
  persistedReducer, composeWithDevTools())

export const persistor = persistStore(store)