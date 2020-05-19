import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/index.jsx';
import Historical from './Components/Historical/index.jsx';
import Contact from './Components/Contact/index.jsx';
import About from './Components/About/index.jsx';
import NotFound from './Components/404NotFound/index.jsx';
import Header from './Components/Header/index.jsx';
import Footer from './Components/Footer/index.jsx';
import './App.css';



class App extends Component {

    render(){
        return (
            <div className="App">
                <Router>
                    <div>
                      <Header/>
                      <main>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/historical' component={Historical} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/about' component={About} />
                            <Route component={NotFound} />
                        </Switch>
                      </main>
                      <Footer/>
                    </div>
                </Router>
            </div>
        )
    }
}



export default App;
