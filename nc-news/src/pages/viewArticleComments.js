import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import axios from 'axios';
// import dateFormat from '../utils/date-format' 

class ArticleComments extends React.Component {
    state = {
        comments : [],
        isLoading: true
    }

    componentDidMount () {
        console.log(this.props)
        axios
        .get(`https://nc-news-server-liam.herokuapp.com/api/articles/${this.props.uri}`)
        .then((res)=> {
            this.setState({
                comments: res.data.comments,
                isLoading: false
            })
        })
    }

    render () {
        if(this.state.isLoading)
        return <b>comments loading...</b>
        return (
            <div className = 'commentscontainer'>
                <ul className = 'commentsList'>
                    {this.state.comments.map((comment)=> {
                        return (
                            <li key={comment.comment_id}>
                                <div className = 'indvCommentHead'>
                        <h1 className = 'commentAuthor'>{comment.author}</h1>
                        <h2 className = 'commentBody'>{comment.body}</h2>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

export default ArticleComments;