import React from "react";
import axios from "axios";



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
            this.setState({
              article: res.data.article,
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
                    <h1 className = 'indvArtilceName'>{this.state.article.title}</h1>
                </li>
            </ul>
        )
    }
}


export default IndividualArticle;