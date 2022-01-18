import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/quotes"></Route>
      <Route path="/quotes/:quotesId"></Route>
      <Route path="/new-quote"></Route>
    </Switch>
  );
}

export default App;
