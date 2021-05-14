import './App.css';
import { ApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from 'Routes/Routes.js';
import ScrollToTop from 'Utils/UIutils/ScrollToTop';
import {
  CenterAlignedColumnContainer,
  CenterAlignedColumnContainerWithShadowBackground
} from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import PageHeading from 'Modules/Global/Components/PageHeading';
import GlobalStyle from 'StylesLibrary/GlobalStyles';
import DisplayQuoteState from 'Modules/DisplayQuote/State/DisplayQuoteState';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationState className="App">
        <DisplayQuoteState>
          <Router>
            <ScrollToTop>
              <Switch>
                <Route component={Routes} />
              </Switch>
            </ScrollToTop>
          </Router>
        </DisplayQuoteState>
      </ApplicationState>
    </QueryClientProvider>
  );
}

export default App;
