const getLocation = state => state.location;
const getCurrentWeather = state => state.currentWeather;
const getDailyWeather = state => state.dailyWeather;
const getSearchError = state => state.searchError;

const weatherSelectors = {
    getLocation,
    getCurrentWeather,
    getDailyWeather,
    getSearchError,
};
export default weatherSelectors;
