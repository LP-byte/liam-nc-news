import React from 'react';
import axios from 'axios';
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


class Topics extends React.Component {
    state = {
        topics: [],
        isLoading: true
    };

    componentDidMount() {
        axios.get('https://nc-news-server-liam.herokuapp.com/api/topics')
        .then((res)=> {
            this.setState({
                topics: res.data.topics,
                isLoading: false,
            })
        })

    }

    render() {
        if(this.state.isLoading)
        return <b>topics Loading</b>

        return (
            <div className = 'topicPageContainer'>
                <ul className = 'topicArticleLinks'>
                    
                    {this.state.topics.map((topic)=>{
                        return (
                            <StyledLink to={`/topics/${topic.slug}`}>
                        <button className = 'topicButtons'>{topic.slug}</button>
                        </StyledLink>

                        )
                    })}

                </ul>



            <ul className = 'topicsCards'>
                {this.state.topics.map((topic) => {
                    return (

 
                     <div className = 'topicCards'>
                    <li key = {topic.slug}>
                    <h2 className = 'topicDesc'>{topic.description}</h2>
                    <h3 className = 'topicSlug'>{topic.slug}</h3>
                    </li>
                    </div> 
                    

                    )
                })}
            </ul>
            </div>
        )
    }
}

export default Topics;