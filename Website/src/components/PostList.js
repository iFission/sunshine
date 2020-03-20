import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: []

        }
    }

    componentDidMount() {
        axios.get('https://jasonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const {posts} = this.state
        return (
            <div>
            {
            posts.length ?
            posts.map (post => <div key={post.id}>{post.title}</div>) :
            null
            }
            </div>
        )
    }
}