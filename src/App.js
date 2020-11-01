import React from 'react'
import Feeds from './Components/Feeds/Feeds'
import Dashboard from './Components/Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './UI/Navbar/Navbar'
function App() {
  return (
    <>
    
    <Router>
      <Navbar/>
      <Switch>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/" component={Feeds}></Route>
    
      </Switch>
      </Router>
    </>
  );
}

export default App;
