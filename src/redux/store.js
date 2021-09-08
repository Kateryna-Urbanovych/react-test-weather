import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { weatherReducer } from './weather';

const weatherPersistConfig = {
    key: 'location',
    storage,
    whitelist: ['location'],
};

const store = configureStore({
    reducer: persistReducer(weatherPersistConfig, weatherReducer),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
