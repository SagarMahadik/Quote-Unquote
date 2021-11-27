import './App.css';
import { ApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from 'Routes/Routes.js';
import ScrollToTop from 'Utils/UIutils/ScrollToTop';
import { ReactQueryDevtools } from 'react-query/devtools';
import DisplayQuoteState from 'Modules/DisplayQuote/State/DisplayQuoteState';
import ThemeAppBackground from './BennyStyleLibrary/Themes/ThemeAppBackground';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationState className="App">
        <DisplayQuoteState>
          <ThemeAppBackground>
            <Router>
              <ScrollToTop>
                <Switch>
                  <Route component={Routes} />
                </Switch>
              </ScrollToTop>
            </Router>
          </ThemeAppBackground>
        </DisplayQuoteState>
      </ApplicationState>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
