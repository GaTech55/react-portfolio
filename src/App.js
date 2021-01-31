import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";

function App() {
  return (
    <body>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            {/* Ordering from most specific to least specific for SWITCH. If using */}
            {/* Switch need a catch all at the bottom. Also using Exact for fun. */}
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </body>
  );
}

export default App;
