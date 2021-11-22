import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contactus"
import Explore from "./pages/Explore"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/aboutus' component={About} />
        <Route path='/explore' component={Explore} />
        <Route path='/contactus' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;