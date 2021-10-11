import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PageMain from '../page-main/page-main';
import PageLogin from '../page-login/page-login';
import PageFavorite from '../page-favorite/page-favorite';
import PageProperty from '../page-property/page-property';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  offersCount: number;
};

function App({offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={AppRoute.Main}>
          <PageMain
            offersCount={offersCount}
          />
        </Route>

        <Route exact path={AppRoute.SignIn}>
          <PageLogin />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <PageFavorite />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>

        <Route exact path={AppRoute.Room}>
          <PageProperty />
        </Route>

        <Route>
          <Page404 />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
