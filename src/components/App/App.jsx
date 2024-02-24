import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import Header from "../Header/Header";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
//import Understanding from "../Understanding/Understanding";
import { useState, useEffect } from "react";

function App() {

  const [feedbackProfile, setFeedbackProfile] = useState ({})


  const dispatch = useDispatch ();

 

  return (
    <Router>
      <div className='App'>
        <Route path="/" exact>
          <Header />
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Header />
          <Understanding />
        </Route>
        <Route path="/support">
          <Header />
          <Support />
        </Route>
        <Route path="/comments">
          <Header />
          <Comments />
        </Route>
    </div>
    </Router>
  );
}

export default App;
