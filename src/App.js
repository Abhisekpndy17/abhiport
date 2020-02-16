import React from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
import Header from './components/1header/Header';
import Home from './components/2sections/Home';
import Footer from './components/4footer/Footer';
import Works from './components/works/Works';
import AboutUs from './components/about-us/AboutUs';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Route path='/' exact component={Home}/>
      <Route path='/works'  component={Works}/>
      <Route path='/about-us'  component={AboutUs}/>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
