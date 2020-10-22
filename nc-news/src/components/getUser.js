import React from 'react';
import axios from "axios";


class UserObj extends React.Component {

    state = {
        user: [],
        isLoading: true
    }

    componentDidMount() {
        axios
        .get(
            `https://nc-news-server-liam.herokuapp.com/api/users/${this.props.username}`
        )
        .then((res)=>{
            this.setState({
                user: res.data.user,
                isLoading: false
            });
        });
    }
    

}

export default UserObj