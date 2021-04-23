import './App.css';
import { ApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from 'Routes/Routes.js';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationState className="App">
        <Router>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Router>
      </ApplicationState>
    </QueryClientProvider>
  );
}

export default App;
