import { Redirect, Switch, Route } from "react-router-dom";
import Quotes from './pages/Quotes';
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
function App() {
  return (
    <div>
      <Switch>
        <Route path="" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes">
          <Quotes/>
        </Route>
        <Route path="/quotes/:quoteid">
          <QuoteDetails/>
        </Route>
        <Route path="/newquote">
          <NewQuote/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
