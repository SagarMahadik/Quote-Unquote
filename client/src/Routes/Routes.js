import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom';

const DisplayQuoteMainComponent = React.lazy(() =>
  import('Modules/DisplayQuote/DisplayQuoteMainComponent.js')
);

const QuoteDisplay = React.lazy(() =>
  import('Modules/DisplayQuote/Components/QuoteDisplay/QuoteDisplay.js')
);

const AddQuote = React.lazy(() =>
  import('Modules/AddQuote/AddQuoteMainComponent.js')
);

const LoadingCOntiner = React.lazy(() =>
  import('StylesLibrary/Molecules/LoadingModule/InputButtonLoadingContainer.js')
);

const AdminLandingPage = React.lazy(() =>
  import('Modules/Authentication/AdminLandingPage/AdminLandingPage.js')
);

const Routes = () => {
  return (
    <Router>
      <React.Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route exact path="/" component={AdminLandingPage} />
          <Route exact path="/addQuote" component={AddQuote} />
          <Route
            exact
            path="/readQuote"
            component={DisplayQuoteMainComponent}
          />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default Routes;
