import React, { Component } from 'react';
import Search from './Search';
import CreateBlog from './CreateBlog';
import Blogs from './Blogs';
import blogs from '../data/data';

class App extends Component {
    state = {
        blogs: blogs,
        searchTerm: ''
    };

    onDelete = (id) => {
        const updatedBlog = this.state.blogs.filter((blog) => blog.objectId !== id);
        this.setState({ blogs: updatedBlog});
    };

    onUpdate = (id) => {
        console.log(id)
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    handleCreateBlogSubmit = (event, blog) => {
        event.preventDefault();
        let updatedBlogs = [blog, ...this.state.blogs];
        this.setState({ blogs: updatedBlogs });
    }

    render() {
        return (
            <div style={{
                marginTop: '100px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column' 
            }}>
                <Search 
                    handleChange={this.handleChange}
                    searchTerm={this.state.searchTerm}/>
                <CreateBlog 
                    handleCreateBlogSubmit={this.handleCreateBlogSubmit}/>
                <Blogs 
                    blogs={this.state.blogs}
                    searchTerm={this.state.searchTerm}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}/>
            </div>
        );
    };
};

export default App;