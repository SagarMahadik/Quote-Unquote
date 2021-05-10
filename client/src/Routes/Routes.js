import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import {
  CenterAlignedColumnContainer,
  CenterAlignedColumnContainerWithShadowBackground
} from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import Loader from 'StylesLibrary/Atoms/LoadingModule/Loader';
import FallBackLoader from 'Modules/Global/Components/FallBackLoader';

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

const CoreLandingPage = React.lazy(() =>
  import('Modules/Authentication/CoreLandingPage/CoreLandingPage.js')
);

const Routes = () => {
  const location = useLocation();
  return (
    <React.Suspense fallback={<FallBackLoader />}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AdminLandingPage} />
          <Route exact path="/corelanding" component={CoreLandingPage} />
          <Route exact path="/addQuote" component={AddQuote} />
          <Route
            exact
            path="/readQuote"
            component={DisplayQuoteMainComponent}
          />
        </Switch>
      </AnimatePresence>
    </React.Suspense>
  );
};

export default Routes;
