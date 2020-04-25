import React, { Component } from 'react';
import './App.css';
//add routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import { About } from './About';
import Contact from './Contact';
import LiveChat from './LiveChat'
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import FOne from './FOne'
import FTwo from './FTwo'
import FThree from './FThree'
import FFour from './FFour'
import FOneA from './FOneA'
import FOneB from './FOneB'
import FOneC from './FOneC'
import FTwoA from './FTwoA'
import FTwoB from './FTwoB'
import FThreeA from './FThreeA'
import FThreeB from './FThreeB'
import FFourA from './FFourA'
import FFourB from './FFourB'
import { Footer } from './components/Footer'
import PopoutChat from './PopOutChat';


class App extends Component {

  render() {
    return (
      <React.Fragment> {/* create a wrapper */}
        <NavigationBar />
          {/* grab router */}
          {/* 3 pages */}
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/contact/livechat" component={LiveChat} />
                <Route exact path='/contact/livechat/filterone' component={FOne} />
                <Route exact path='/contact/livechat/filtertwo' component={FTwo} />
                <Route exact path='/contact/livechat/filterthree' component={FThree} />
                <Route exact path='/contact/livechat/filterfour' component={FFour} />
                <Route exact path='/contact/livechat/filterone/a' component={FOneA} />
                <Route exact path='/contact/livechat/filterone/b' component={FOneB} />
                <Route exact path='/contact/livechat/filterone/c' component={FOneC} />
                <Route exact path='/contact/livechat/filtertwo/a' component={FTwoA} />
                <Route exact path='/contact/livechat/filtertwo/b' component={FTwoB} />
                <Route exact path='/contact/livechat/filterthree/a' component={FThreeA} />
                <Route exact path='/contact/livechat/filterthree/b' component={FThreeB} />
                <Route exact path='/contact/livechat/filterfour/a' component={FFourA} />
                <Route exact path='/contact/livechat/filterfour/b' component={FFourB} />
                <Route exact path='/startchat' component={PopoutChat} />
                <Route component={NoMatch} />
                {/* return 404 error page */}
              </Switch>
            </Router>
          </Layout>
          <Footer />
      </React.Fragment>
    );
  }
}

export default App;
