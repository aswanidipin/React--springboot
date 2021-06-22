import { data } from 'jquery';
import React from 'react';
import $ from "jquery";
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';
import ListTradeComponent from './components/ListTradeComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateTradeComponent from './components/CreateTradeComponent';

function App(){
  
  
    return(
      
      <Router>
      <div className="container">
        <Switch>
          <Route  exact path="/" component={CreateTradeComponent}></Route>
          <Route exact path="/trades" component={ListTradeComponent}></Route>
          <Route exact path= "/addtrade" component={CreateTradeComponent}></Route>

        </Switch>
              </div>
      </Router>
      
    );
  }
export default App;


