import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import FallBackLoader from 'Modules/Global/Components/FallBackLoader';
import PrivateRoute from './PrivateRoutes';

const QuoteDisplay = React.lazy(() =>
  import('Modules/DisplayQuote/Components/QuoteDisplay/QuoteDisplay')
);

const MoodPage = React.lazy(() =>
  import('Modules/DisplayQuote/Components/MoodPage/MoodPage.js')
);

const AddQuote = React.lazy(() =>
  import('Modules/AddQuote/AddQuoteMainComponent.js')
);

const AdminLandingPage = React.lazy(() =>
  import('Modules/Authentication/AdminLandingPage/AdminLandingPage.js')
);

const CoreLandingPage = React.lazy(() =>
  import('Modules/Authentication/CoreLandingPage/CoreLandingPage.js')
);

const SignUpSuccess = React.lazy(() =>
  import(
    'Modules/Authentication/CoreLandingPage/AuthSuccessPages/SignUpSuccess.js'
  )
);

const DisplayQuotesDarkTheme = React.lazy(() =>
  import('StyleLibrary1.0/Pages/DisplayQuotesDarkTheme')
);

const DarkThemeLandingPage = React.lazy(() =>
  import('StyleLibrary1.0/Pages/DarkThemeLandingPage')
);

const AppLandingPage = React.lazy(() =>
  import('Modules/AppLandingPage/Components/AppLandingPage.jsx')
);

const Routes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <React.Suspense fallback={<FallBackLoader />}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={AppLandingPage} />
            <PrivateRoute
              exact
              path="/corelanding"
              component={AdminLandingPage}
            />
            <PrivateRoute exact path="/addQuote" component={AddQuote} />
            <Route exact path="/readQuote" component={QuoteDisplay} />
            <Route exact path="/moodPage" component={MoodPage} />
            <Route exact path="/signUpSuccess" component={SignUpSuccess} />
            <Route
              exact
              path="/displayQuotesDarkTheme"
              component={DisplayQuotesDarkTheme}
            />
            <Route
              exact
              path="/darkThemeLandingPage"
              component={DarkThemeLandingPage}
            />
          </Switch>
        </React.Suspense>
      </AnimatePresence>
    </>
  );
};

export default Routes;
