import React from 'react';
import './App.css';
import Header from "./components/Header";
import { Router } from "@reach/router";
import ArticleFeedList from "./pages/Home"
import IndividualArticle from './pages/viewArticle'

function App() {

  return (
    
    <div className="App">
      <Header />
      <Router>
      <ArticleFeedList path='/'/>
      <IndividualArticle path='/:article_id'/>
      </Router>
    </div>
  );
}

export default App;
