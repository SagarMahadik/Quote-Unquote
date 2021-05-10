import './App.css';
import { ApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from 'Routes/Routes.js';
import ScrollToTop from 'Utils/UIutils/ScrollToTop';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationState className="App">
        <Router>
          <ScrollToTop>
            <Switch>
              <Route component={Routes} />
            </Switch>
          </ScrollToTop>
        </Router>
      </ApplicationState>
    </QueryClientProvider>
  );
}

export default App;
