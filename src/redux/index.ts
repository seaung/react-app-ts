import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import reduxPromise from "redux-promise";
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({})

const persistConfig = {
    key: "redux-state",
    storage: storage
}

const persistReducerConfig = persistReducer(persistConfig, reducers);

const middleware = [reduxThunk, reduxPromise];

export const store = configureStore({
    reducer: persistReducerConfig,
    middleware: middleware
});

export const persistor = persistStore(store);