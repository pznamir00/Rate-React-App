import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/index.js';
import Historical from './Components/Historical/index.js';
import Contact from './Components/Contact/index.js';
import About from './Components/About/index.js';
import NotFound from './Components/404NotFound/index.js';
import { Header, Loader, Footer } from './Components/Layout/index.js';
import './App.scss';



const App = () => {
    return (
        <div className="App">
            <Router>
                <Loader/>
                <Header/>
                <main>
                    <Switch>
                        <Route exact path={['/', '/Rate-React-App']} component={Home} />
                        <Route path='/historical' component={Historical} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </div>
    );
}



export default App;
