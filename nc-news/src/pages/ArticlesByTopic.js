import React from 'react';
import axios from 'axios'

class ArticlesByTopic extends React.Component {

  
    state = {
      articles: [],
      isLoading: true,
    };

    componentDidMount() {
      console.log(this.props)
        axios.get(`https://nc-news-server-liam.herokuapp.com/api/articles?topic=${this.props.slug}`)
             .then((res) => {
              this.setState({
              articles: res.data.articles,
              isLoading: false,
            });
          });
      }

      render () {
        if(this.state.isLoading)
        return <b>articlesloading...</b>

        return (
          
          <div className = 'topicArticleContainer'>

            <ul className = 'topicArticleCards'>
              {this.state.articles.map((article)=> {
                return (
                  <li key = {article.article_id}>
                        <div className = 'articleFeedHead'>
                        <h1 className = 'articleFeedAuthor'>Author: {article.author}</h1>
                        <h2 className = 'articleFeedDateStamp'>{article.created_at}</h2>
                        </div>
                        <h3 className = 'articleFeedName'>{article.title}</h3>
                        <h4 className = 'articleFeedBody'>{article.body.slice(0,60)}...</h4>
                        <h5 className = 'articleFeedLikes'>Likes: {article.votes}</h5>
                  </li>
                )
              })}
                

              </ul>
          </div>
        )
      }
}

export default ArticlesByTopic;