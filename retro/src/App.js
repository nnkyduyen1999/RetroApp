import "./App.css";
import Header from "./components/Header/Header";
import ListBoards from "./components/ListBoard/ListBoard";
import Profile from "./components/Profile/Profile";
import Teams from "./components/Teams/Teams";
import BoardDetail from "./components/BoardDetail/BoardDetail";
import AddBoard from "./components/Board/AddBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ListBoards} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/boards" exact component={ListBoards} />
          <Route path="/boards/:id" component={BoardDetail} />
        </Switch>
        <AddBoard/>
      </div>
    </Router>
  );
}

export default App;
