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
import Review from "../Review/Review";
import SubmissionSuccess from "../SubmissionSuccess/SubmissionSuccess";
import { useState, useEffect } from "react";

function App() {

const [feedbackList, setFeedbackList] = useState([]);

const getFeedbackList = () =>{
  axios
  .get("/api/feedback")
  .then((response) => {
    console.log("GET request was successful", response.data)
    setFeedbackList(response.data);
  })
  .catch((err) => {
    console.log("GET error in getting feedbackList", err);
  });
};
//On load, get list
useEffect(getFeedbackList, []);
 

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
          <Route path="/SubmissionSuccess">
            <SubmissionSuccess />
          </Route>
      </div>
    </Router>
  );
}

export default App;
