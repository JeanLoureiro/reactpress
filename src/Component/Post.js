import React, { Component } from 'react';
import NotFound from './NotFound'

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    componentDidMount() {

        const { match } = this.props

        fetch(ThemeSettings.URL.api + "/posts?slug=" + match.params.slug)
            .then( (response) => {

                const { ok, statusText } = response

                if (!ok) { throw Error( statusText ) }

                return response.json();
            })
            .then( res => ( this.setState({ post: res[0] }) ) )
    }

    renderPosts() {

        const { post } = this.state

        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{post.title.rendered}</h4>
                    <p className="card-text"><small className="text-muted">{post.author_name} &ndash; {post.published_date}</small></p>
                    {
                        post.featured_image_src ? <img className="featured-image" src={post.featured_image_src} alt="featured image" /> : null
                    }
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }}  />
                </div>
            </div>
        )
    }


    render() {

        const { post } = this.state

        return (
            <div className="container post-entry">
                { post.title ?
                    this.renderPosts() :
                    <NotFound />
                }
            </div>
        );
    }
}

export default Post;
