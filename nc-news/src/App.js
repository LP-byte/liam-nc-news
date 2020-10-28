import React from 'react';
import './App.css';
import Header from "./components/Header";
import { Router } from "@reach/router";
import Home from "./pages/Home"
import IndividualArticle from './pages/viewArticle'
import ArticlesByTopic from './pages/ArticlesByTopic'
import Topics from './pages/Topics'
import ArticleComments from './pages/viewArticleComments'

function App() {

  return (
    
    <div className="App">
      <Header />
      <Router>
      <Home path='/'/>
      <IndividualArticle path='/:article_id'/>
      <ArticleComments path='/:article_id/comments'/>
      <Topics path='/topics'/>
      <ArticlesByTopic path='/topics/:slug'/>

      </Router>
    </div>
  );
}

export default App;
