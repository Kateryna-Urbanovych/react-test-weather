import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import NotFoundPage from 'views/NotFoundPage';
import Loader from 'components/Loader';

const WeatherSearchPage = lazy(() =>
    import(
        'views/WeatherSearchPage' /* webpackChunkName: "weather-search-page" */
    ),
);
const WeatherResultsPage = lazy(() =>
    import(
        'views/WeatherResultsPage' /* webpackChunkName: "weather-results-page" */
    ),
);
const SavedLocationsPage = lazy(() =>
    import(
        'views/SavedLocationsPage' /* webpackChunkName: "saved-locations-page" */
    ),
);

export default function App() {
    return (
        <>
            <AppBar />
            <Container>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path="/" exact>
                            <WeatherSearchPage />
                        </Route>
                        <Route path="/weather" exact>
                            <WeatherResultsPage />
                        </Route>
                        <Route path="/locations">
                            <SavedLocationsPage />
                        </Route>
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </Switch>
                </Suspense>
            </Container>
            <ToastContainer />
        </>
    );
}
