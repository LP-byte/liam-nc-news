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
    
    if(this.state.isLoading) 
    return <b>article data loading...</b>
    
    
    return (
      
      
      <ul className = 'articleFeedCards'>
        {this.state.articles.map((article)=> {


           const yearFormat = article.created_at.slice(8, 10) + " " + monthToStr +" "+ article.created_at.slice(0, 4)
           const timeFormat = article.created_at.slice(11, 16)
           
           const timeStampNow = new Date().valueOf();
           const articleUnix = new Date(article.created_at).valueOf();
           
           const secondsPast = (timeStampNow - articleUnix);
           
           let articlePostTime = '';


           if (secondsPast < 61){
            articlePostTime = parseInt(secondsPast) + 'seconds ago..'
           }

           else if(secondsPast < 3601 && secondsPast > 60){
            articlePostTime = parseInt(secondsPast) + 'minutes ago..'
           }

           else if(secondsPast >3600 && secondsPast < 86401){
             articlePostTime = 'posted ' + parseInt(secondsPast) + ' hours ago.'
           } 

           else {
             articlePostTime = yearFormat + ' at ' + timeFormat
           }
           
            return (
                <li key ={article.article_id}>
                    <StyledLink to={`/${article.article_id}`}>
                        <div className = 'articleFeedHead'>
                        <h1 className = 'articleFeedAuthor'>Author: {article.author}</h1>
                        <h2 className = 'articleFeedDateStamp'>{articlePostTime}</h2>
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