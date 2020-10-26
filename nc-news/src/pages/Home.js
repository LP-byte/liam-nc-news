import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import axios from 'axios';
import dateFormat from '../utils/date-format'


const StyledLink = styled(Link)`
  color: red;
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


render () {
    console.log(this.state.articles)
    if(this.state.isLoading) 
    return <b>article data loading...</b>
    
    
    return (
      
      
      <ul className = 'articleFeedCards'>
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
                        <h5 className = 'articleFeedLikes'>Likes: {article.votes}</h5>
                        
                    </StyledLink>
                </li>
            )
        })}
        </ul>
        
    )
}

}

export default ArticleFeedList;