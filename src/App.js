import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/login";
import LiveStream from "./pages/LiveStream";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/LiveStream" component={LiveStream} />
       {/* <Route exact path="/404" component={Error404} />
        <Redirect to="/404" /> */}
      </Switch>
    </Router>
  );
}