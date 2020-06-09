import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from './pages/Dashboard'
import Form from './pages/Form'
import Enquiry from './pages/Enquiry'

function App() {
  return (
    <Router>
          <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/status">
                <Enquiry/>
              </Route>
              <Route path="/form">
                <Form/>
              </Route>
              <Route path="/faq">
                <Enquiry />
              </Route>
              <Route path="/enquiry">
                <Enquiry />
              </Route>
              <Route path="/checklist">
                <Enquiry />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
