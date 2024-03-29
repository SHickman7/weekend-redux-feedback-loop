import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import ThankyouScreen from "../ThankyouScreen/ThankyouScreen";


function App() {
 

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
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/ThankyouScreen">
            <ThankyouScreen />
          </Route>
      </div>
    </Router>
  );
}

export default App;
