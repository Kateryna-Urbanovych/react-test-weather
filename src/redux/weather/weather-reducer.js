import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import weatherOperations from './weather-operations';

const { fetchWeatherByName, fetchWeatherByCoordinates, fetchCurrentLocation } =
    weatherOperations;

const locationReducer = createReducer(null, {
    [fetchWeatherByName.fulfilled]: (_, { payload }) => payload,
    [fetchCurrentLocation.fulfilled]: (_, { payload }) => payload,
});

const currentWeatherReducer = createReducer(null, {
    [fetchWeatherByCoordinates.fulfilled]: (_, { payload }) => ({
        ...payload.currentWeather,
    }),
});

const dailyWeatherReducer = createReducer(null, {
    [fetchWeatherByCoordinates.fulfilled]: (_, { payload }) => [
        ...payload.dailyWeather,
    ],
});

const searchErrorReducer = createReducer(false, {
    [fetchWeatherByName.rejected]: (_, { payload }) => true,
    [fetchWeatherByName.fulfilled]: (_, { payload }) => false,
    [fetchWeatherByCoordinates.fulfilled]: (_, { payload }) => false,
    [fetchCurrentLocation.fulfilled]: (_, { payload }) => false,
});

const weatherReducer = combineReducers({
    location: locationReducer,
    currentWeather: currentWeatherReducer,
    dailyWeather: dailyWeatherReducer,
    searchError: searchErrorReducer,
});
export default weatherReducer;
