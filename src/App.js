import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Component/Home/Home'
import Posts from './Component/Posts'
import Post from './Component/Post'
import NotFound from './Component/NotFound'

// // Load the Sass file
require('./Component/style.scss')

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Header />

                    <Switch>
                        <Route exact path={ThemeSettings.path} component={Home} />
                        <Route exact path={ThemeSettings.path + 'posts'} component={Posts} />
                        <Route exact path={ThemeSettings.path + 'post/:slug'} component={Post} />
                        <Route path="*" component={NotFound} />
                    </Switch>

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App
