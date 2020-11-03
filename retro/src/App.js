import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import ListBoards from "./components/ListBoard/ListBoard";
import Profile from "./components/Profile/Profile";
import Teams from "./components/Teams/Teams";
import BoardDetail from "./components/BoardDetail/BoardDetail";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/register" exact component={SignUp} />
          <Route path="/login" exact component={LogIn} />
          <ProtectedRoute path="/" exact component={ListBoards} />
          <ProtectedRoute path="/profile" exact component={Profile} />
          <ProtectedRoute path="/teams" exact component={Teams} />
          <ProtectedRoute path="/boards" exact component={ListBoards} />
          <ProtectedRoute path="/boards/:id" component={BoardDetail} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
    </Router>
  );
}

export default App;
