const BASE_URL_WEATHER = 'https://api.openweathermap.org/data/2.5';
const KEY_WEATHER = process.env.REACT_APP_KEY_WEATHER;

const BASE_URL_GEOCODING = 'https://www.mapquestapi.com/geocoding';
const KEY_GEOCODING = process.env.REACT_APP_KEY_GEOCODING;

async function fetchWithErrorHandling(url = '') {
    const response = await fetch(url);
    return response.ok
        ? response.json()
        : Promise.reject(new Error('Not found'));
}

const fetchWeatherByName = query => {
    return fetchWithErrorHandling(
        `${BASE_URL_WEATHER}/weather?q=${query}&lang=uk&units=metric&appid=${KEY_WEATHER}`,
    );
};

const fetchWeatherByCoordinates = (lat, lon) => {
    return fetchWithErrorHandling(
        `${BASE_URL_WEATHER}/onecall?lat=${lat}&lon=${lon}&lang=uk&units=metric&appid=${KEY_WEATHER}`,
    );
};

const fetchGeocoding = (lat, lon) => {
    return fetchWithErrorHandling(
        `${BASE_URL_GEOCODING}/v1/reverse?key=${KEY_GEOCODING}&location=${lat}%2C${lon}&outFormat=json&thumbMaps=false`,
    );
};

export const openWeatherAPI = {
    fetchWeatherByName,
    fetchWeatherByCoordinates,
    fetchGeocoding,
};
