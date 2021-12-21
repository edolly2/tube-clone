import "./App.css";

import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";

import Header from "./_components/Header/Header";
import RecommendedVideos from "./_components/RecommendedVideos/RecommendedVideos";
import SideBar from "./_components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <div className="app__mainpage">
              <SideBar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
