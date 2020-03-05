import React, {Component} from 'react';
import './App.css';
//add routing
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import {About} from './About';
import Contact from './Contact';
import LiveChat from './LiveChat'
import {NoMatch} from './NoMatch';
import {Jumbotron} from './components/Jumbotron';
import {Layout} from './components/Layout'
import {NavigationBar} from './components/NavigationBar'
import FilterOne from './FilterOne'
import FilterTwo from './FilterTwo'

class App extends Component {
  render() {
    return (
      <React.Fragment> {/* create a wrapper */}
        <NavigationBar />
        <Jumbotron />
        {/* grab router */}
        {/* 3 pages */}
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/livechat" component={LiveChat} />
              <Route path='/filterone' component={FilterOne}/>
              <Route path='/filtertwo' component={FilterTwo}/>
              <Route component={NoMatch}/>
              {/* return 404 error page */}
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
