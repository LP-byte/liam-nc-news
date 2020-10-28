import React from "react";
import axios from "axios";
import '../css/articleFeed.css'
import singleDateFormat from '../utils/single-article-date-format'
import { Link } from "@reach/router";
import styled from "styled-components";

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

class IndividualArticle extends React.Component {
    state = {
      article: [],
      isLoading: true,
    };
    
  
    componentDidMount() {
        axios
          .get(
            `https://nc-news-server-liam.herokuapp.com/api/articles/${this.props.article_id}`)
          .then((res) => {
            const formattedArticleDate = singleDateFormat(res.data.article)
            this.setState({
              article: formattedArticleDate,
              isLoading: false,
            });
          });
      }
      render() {
        if (this.state.isLoading) {
          return <p>data loading...</p>;
          
        }
        return (
            <div className = 'articleContainer'>
            <ul className = 'articleInfo'>
                <li key = {this.state.article.article_id}>
                  <div className = 'invArticleHead'>
                    <h1 className = 'indvArtilceName'>{this.state.article.title}</h1>
                    <h2 className = 'indvArticleDate'>{this.state.article.created_at}</h2>
                    </div>
                    <h3 className = 'indvArticleFeedName'>{this.state.article.title}</h3>
                    <h4 className = 'indvArticleBody'>{this.state.article.body}</h4>
                    <h5 className = 'indvArticleFeedVotes'>Votes: {this.state.article.Votes}</h5>
                </li>
            </ul>
            <StyledLink to={`/${this.state.article.article_id}/comments`}>
                        <button className = 'topicButtons'>comments</button>
                        </StyledLink>

            </div>
        )
    }
}


export default IndividualArticle;