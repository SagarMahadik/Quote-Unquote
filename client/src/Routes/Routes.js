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

const Routes = () => {
  return (
    <Router>
      <React.Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route exact path="/" component={DisplayQuoteMainComponent} />
          <Route exact path="/readQuote" component={QuoteDisplay} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default Routes;
