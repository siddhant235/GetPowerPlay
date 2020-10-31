import React from 'react'
import Feeds from './Components/Feeds/Feeds'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './UI/Navbar/Navbar'
function App() {
  return (
    <>
    
    <Router>
      <Navbar/>
      <Route path="/" component={Feeds}></Route>
      </Router>
    </>
  );
}

export default App;
