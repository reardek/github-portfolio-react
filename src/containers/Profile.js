import React, { Component } from 'react'
import Link from '../components/Link/Link'
import './Profile.css'

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            loading: true,
        }
    }
    async componentDidMount() {
        const profile = await fetch('https://api.github.com/users/reardek');
        const profileJSON = await profile.json();

        if (profileJSON) {
            this.setState({
                data: profileJSON,
                loading: false
            })
        }
    }

    render() {
        const { data, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="Profile-cointainer">
                <img src={data.avatar_url} alt="avatar" className="Profile-avatar"/>
                <ul>
                    <li>html_url: <Link url={data.html_url} title='Github URL' /></li>
                    <li>repos_url: {data.repos_url}</li>
                    <li>name: {data.name}</li>
                    <li>company: {data.company}</li>
                    <li>location: {data.location}</li>
                    <li>email: {data.email}</li>
                    <li>bio: {data.bio}</li>
                </ul>  
            </div>
        )
    }
}

export default Profile