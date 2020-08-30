import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeContainer } from './Components/Home/index.js';
import { HistoricalContainer } from './Components/Historical/index.js';
import { ContactContainer } from './Components/Contact/index.js';
import About from './Components/About/index.js';
import NotFound from './Components/404NotFound/index.js';
import Header from './Components/Layout/Header';
import Loader from './Components/Layout/Loader';
import Footer from './Components/Layout/Footer';
import './App.scss';


const App = () => {
    return (
        <div className="App">
            <Router>
                <Loader/>
                <Header/>
                <main>
                    <Switch>
                        <Route exact path={['/', '/Rate-React-App']} component={HomeContainer} />
                        <Route path='/historical' component={HistoricalContainer} />
                        <Route path='/contact' component={ContactContainer} />
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
