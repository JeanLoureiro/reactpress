// External dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Placeholder from './placeholder.jpg';
import NotFound from './NotFound';

class PostList extends Component {


    renderPosts() {
        const { posts } = this.props

        return posts.map( post => {
            return (
                <div className="col-md-4 card-outer" key={post.id}>
                    <div className="card">
                        <div className="img-outer">
                            <Link to={'posts/' + post.slug}>
                                <img className="card-img-top" src={post.featured_image_src ? post.featured_image_src : Placeholder} alt="Featured Image" />
                            </Link>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"><Link to={'posts/' + post.slug}>{post.title.rendered}</Link></h4>
                            <p className="card-text"><small className="text-muted">{post.author_name} &ndash; {post.published_date}</small></p>
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}  />

                        </div>
                    </div>
                </div>
            )
        });
    }


    render() {
        if (!this.props.posts) {
            return null;
        }

        return (
            <div className="posts-container">
                {this.props.posts.length ?
                    this.renderPosts() :
                    <NotFound />
                }
            </div>
        );
    }
}

export default PostList;
