import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import axios from 'axios';

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
      this.setState({
        articles: res.data.articles,
        isLoading: false,
      });
    });

}


render () {
    
    console.log(this.state.user)
    if(this.state.isLoading) 
        return <b>article data loading...</b>

    
    return (


        <ul className = 'articleFeedCards'>
        {this.state.articles.map((article)=> {
            const yearFormat = article.created_at.slice(8, 10) + article.created_at.slice(4, 7) +"-"+ article.created_at.slice(0, 4)
            const timeFormat = article.created_at.slice(11, 16)
            return (
                <li key ={article.article_id}>
                    <StyledLink to={`/${article.article_id}`}>
                        <div className = 'articleFeedHead'>
                        <h1 className = 'articleFeedAuthor'>{article.author}</h1>
                        <h1 className = 'articleFeedDateStamp'>{yearFormat + " "+ timeFormat}</h1>
                        <h1 className = 'articleFeedName'>{article.title}</h1>
                        </div>
                        <h1 className = 'articleFeedBody'>{article.body}</h1>
                        <h1 className = 'articleFeedLikes'>Likes: {article.votes}</h1>
                        
                    </StyledLink>
                </li>
            )
        })}
        </ul>
        
    )
}

}

export default ArticleFeedList;