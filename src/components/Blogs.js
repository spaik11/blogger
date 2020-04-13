import React from 'react';
import BlogItem from './BlogItem';
import { searchIt } from '../services/search';

const blogs = (props) => {
    return props.blogs.filter(searchIt(props.searchTerm)).map((blog) => (
            <BlogItem
                key={blog.objectId}
                blog={blog}
                onDelete={props.onDelete}
                onUpdate={props.onUpdate}/>
        )
    );
};

export default blogs;