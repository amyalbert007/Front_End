import React from 'react'
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListFlatComponent from './components/ListFlatComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateFlatComponent from './components/CreateFlatComponent';
//import UpdateFlatComponent from './components/UpdateFlatComponent';
import ViewFlatComponent from './components/ViewFlatComponent';
import UpdateFlatComponent from './components/UpdateFlatComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container-fluid">
            <Switch>
              <Route path = "/" exact component = {ListFlatComponent}></Route>
              <Route path = "/flat" component = {ListFlatComponent}></Route>
              <Route path = "/add-flat/:flatId" component = {CreateFlatComponent}></Route>
              <Route path = "/view-flat/:flatId" component = { ViewFlatComponent}></Route> 
              <Route path = "/update-flat/:flatId" component = {UpdateFlatComponent}></Route>
            </Switch>
          </div>
         
      </Router>
     
    </div>
    
  );
}

export default App;
