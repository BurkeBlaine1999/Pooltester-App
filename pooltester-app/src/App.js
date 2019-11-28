import React from 'react';
import './App.css';
import Index from './components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import createResult from './components/createResult';
import readResults from './components/readResults';
import Update from './components/update';
import watersafety from "./images/watersafety.png";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="info" variant="dark">
            <Navbar.Brand alt="IWS" href="http://www.iws.ie/"><img src={watersafety} width="60px" height="60px"/></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/readResults">Results</Nav.Link>
              <Nav.Link href="/createResult">Add Result</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/createResult" component={createResult} />
            <Route path="/readResults" component={readResults} />
            <Route path="/Update/:id" component={Update} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
