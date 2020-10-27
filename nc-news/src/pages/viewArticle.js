import React from "react";
import axios from "axios";
import '../css/articleFeed.css'
import singleDateFormat from '../utils/single-article-date-format'




class IndividualArticle extends React.Component {
    state = {
      article: [],
      isLoading: true,
    };
    
  
    componentDidMount() {
        axios
          .get(
            `https://nc-news-server-liam.herokuapp.com/api/articles/${this.props.article_id}`
          )
          .then((res) => {
            const formattedArticleDate = singleDateFormat(res.data.article)
            this.setState({
              article: formattedArticleDate,
              isLoading: false,
            });
          });
      }
      render() {
          console.log(this.state.article)
        if (this.state.isLoading) {
          return <p>data loading...</p>;
          
        }
        return (
            <ul className = 'ArticleContainer'>
                <li key = {this.state.article.article_id}>
                  <div className = 'invArticleHead'>
                    <h1 className = 'indvArtilceName'>{this.state.article.title}</h1>
                    <h2 className = 'indvArticleDate'>{this.state.article.created_at}</h2>
                    </div>
                    <h3 className = 'indvArticleFeedName'>{this.state.article.title}</h3>
        <p className = 'indvArticleBody'>{this.state.article.body}</p>
        <h5 className = 'indvArticleFeedVotes'>Votes: {this.state.article.Votes}</h5>
                </li>
            </ul>
        )
    }
}


export default IndividualArticle;