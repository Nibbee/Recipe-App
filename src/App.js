import React from 'react';
import Navbar from './components/Navbar';
import './components/css/App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from './components/pages/Recipes';
import AddNew from './components/pages/AddNew';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/recipes' component={Recipes} />
          <Route path='/add-new' component={AddNew} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;