import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList'
import LoadingIcon from './loading-icon.gif'
import Placeholder from './placeholder.jpg'

class Posts extends Component {

    constructor(props) {
        super(props);
        this.getMorePosts = this.getMorePosts.bind(this);
        this.state = {
            posts: [],
            page: 0,
            getPosts: true,
            controller: false
        }
    }

    componentWillUnmount() {
        this.getMorePosts = null;
    }

    componentDidMount() {

        window.onbeforeunload = function () { window.scrollTo(0, 0); }

        const {getPosts} = this.state

        // init ScrollMagic Controller
        this.state.controller = new ScrollMagic.Controller();

        // build scene
        var scene = new ScrollMagic.Scene({ triggerElement: "#colophon", triggerHook: "onEnter" })
            .addTo(this.state.controller)
            .on("enter", (e) => {

                if (getPosts && this.getMorePosts !== null) {
                    this.getMorePosts();
                }
            })
    }

    getMorePosts() {

        // adding a loader
        // TODO: Remove jQuery
        jQuery("#loader").addClass("active");

        this.setState({ page: this.state.page + 1 });

        fetch(ReactThemeSettings.URL.api + "/posts/?page=" + this.state.page)
            .then( (response) => {
                const { ok, statusText, headers } = response
                var totalPages

                for (var pair of headers.entries()) {

                    // getting the total number of pages
                    if (pair[0] == 'x-wp-totalpages') {
                        totalPages = pair[1];
                    }

                    if (this.state.page >= totalPages) {
                        this.setState({ getPosts: false })
                    }
                }
                if (!ok) {
                    throw Error(statusText);
                }

                return response.json();
            })
            .then( (results) => {
                var allPosts = this.state.posts.slice();
                results.forEach( (single) => (allPosts.push(single)) )
                this.setState({ posts: allPosts });

                // removing the loader
                jQuery("#loader").removeClass("active");

            }).catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                jQuery("#loader").remove();
            });
    }

    componentDidUpdate() {
        const FadeInController = new ScrollMagic.Controller();
        // TODO: remove jQuery
        jQuery('.posts-container .col-md-4.card-outer').each(function () {

            // build a scene
            const FadeInScene = new ScrollMagic.Scene({
                triggerElement: this.children[0],
                reverse: false,
                triggerHook: 1
            })
                .setClassToggle(this, 'fade-in')
                .addTo(FadeInController);
        });
    }

    render() {

        const { posts } = this.state

        if (posts.length == 0) {
            return null;
        }
        return (
            <div>
                <div className="container">
                    <h1 className="posts-title">Posts</h1>
                    <PostList posts={posts} />
                </div>
                <img src={LoadingIcon} alt="loader gif" id="loader" />
            </div>
        );
    }
}

export default Posts;
