import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './component/navbar'
import Home from "./component/home"
import Users from "./component/users"
import Add from "./component/add"
import Indiusers from "./component/indiusers"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home}/>
        <Route path="/users" exact component={Users}/>
        <Route path="/users/:userid" exact component={Indiusers}/>
        <Route path="/add" exact component={Add}/>
      </Router>
    </div>
  );
}

export default App;
