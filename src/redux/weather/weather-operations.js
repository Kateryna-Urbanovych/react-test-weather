import { createAsyncThunk } from '@reduxjs/toolkit';
import { openWeatherAPI } from 'servises/openWeather-api';

const fetchWeatherByName = createAsyncThunk(
    'fetchWeatherByName',
    async (query, { rejectWithValue }) => {
        try {
            const dataByName = await openWeatherAPI.fetchWeatherByName(query);
            const {
                coord: { lat, lon },
            } = dataByName;
            const dataGeocoding = await openWeatherAPI.fetchGeocoding(lat, lon);
            const { adminArea5: city, adminArea1: country } =
                dataGeocoding.results[0].locations[0];
            const location = {
                city,
                country,
                coordinates: { lat, lon },
            };
            return location;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

const fetchWeatherByCoordinates = createAsyncThunk(
    'fetchWeatherByCoordinates',
    async (coordinates, { rejectWithValue }) => {
        try {
            const { lat, lon } = coordinates;
            const data = await openWeatherAPI.fetchWeatherByCoordinates(
                lat,
                lon,
            );
            const currentWeather = { ...data.current };
            const dailyWeather = [...data.daily];
            return { currentWeather, dailyWeather };
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

const fetchCurrentLocation = createAsyncThunk(
    'fetchGeocoding',
    async (coordinates, { rejectWithValue }) => {
        try {
            const { lat, lon } = coordinates;
            const dataGeocoding = await openWeatherAPI.fetchGeocoding(lat, lon);
            const { adminArea5: city, adminArea1: country } =
                dataGeocoding.results[0].locations[0];
            const location = {
                city,
                country,
                coordinates: { lat, lon },
            };
            return location;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

const weatherOperations = {
    fetchWeatherByName,
    fetchWeatherByCoordinates,
    fetchCurrentLocation,
};
export default weatherOperations;
