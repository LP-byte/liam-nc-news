import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import axios from 'axios';
import dateFormat from '../utils/format-date/date-format'
import sortArticlesByCommentCount from '../utils/sortArticles/sort-by-comments'
import sortArticleByVoteCount from '../utils/sortArticles/sort-by-votes'
const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class ArticleFeedList extends React.Component{
    state =             {
        articles: [],
        isLoading: true     
}

componentDidMount() {
  axios
    .get("https://nc-news-server-liam.herokuapp.com/api/articles")

    .then((res) => {
      
      const newArticles = dateFormat(res.data.articles)
      this.setState({
        articles: newArticles,
        isLoading: false,
      });
      
    });
    
  }
  handlesortByDate = event => {
   axios
    .get("https://nc-news-server-liam.herokuapp.com/api/articles")

    .then((res) => {
      
      const newArticles = dateFormat(res.data.articles)
      this.setState({
        articles: newArticles,
        isLoading: false,
      });
      
    });
  }
  handlesortByCommentCount = event => {
   const sortedByComCount = sortArticlesByCommentCount(this.state.articles)
   this.setState({
     articles: sortedByComCount,
     isLoading: false
   })
  }

  handleSortByVoteCount = event => {
    const sortedByVoteCount = sortArticleByVoteCount(this.state.articles)
    this.setState({
      articles: sortedByVoteCount,
      isLoading: false
    }) 
  }
 

 

render () {
    if(this.state.isLoading) 
    return <b>article data loading...</b>
    
    return (

      <div className = 'homeContainer'>
        <StyledLink to={'/topics'}>
          <button className = 'homeTopicsButton'>
            Topics
          </button>
        </StyledLink>

        <ul className = 'SortByContainer'>
          

        </ul>

      <ul className = 'articleFeedCards'>
      
      <button className = 'sbVotesButton'onClick={() => this.handleSortByVoteCount()}>Votes</button>

          <button className = 'sbDateButton'onClick={() => this.handlesortByDate()}>Date</button>
          <button className = 'sbCommentsButton' onClick={() => this.handlesortByCommentCount()}>comments</button>
      

        {this.state.articles.map((article)=> {

        return (

        <li key ={article.article_id}>
                    <StyledLink to={`/${article.article_id}`}>
                        <div className = 'articleFeedHead'>
                        <h1 className = 'articleFeedAuthor'>Author: {article.author}</h1>
                        <h2 className = 'articleFeedDateStamp'>{article.created_at}</h2>
                        </div>
                        <h3 className = 'articleFeedName'>{article.title}</h3>
                        <h4 className = 'articleFeedBody'>{article.body.slice(0,60)}...</h4>
                        <h5 className = 'articleFeedLikes'>Votes: {article.votes}</h5>
                        <h6 className = 'articleFeedCommentCount'>total comments: {article.comment_count}</h6>
                        
                    </StyledLink>
                </li>
            )
        })}
        </ul>
        </div>
    )
}

}
export default ArticleFeedList;