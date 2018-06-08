import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Component/Header'
import Footer from './Component/Footer'
import Posts from './Component/Posts'
import Post from './Component/Post'
import NotFound from './Component/NotFound'
import LoadingIcon from './Component/loading-icon.gif'
import Placeholder from './Component/placeholder.jpg'

// // Load the Sass file
require('./Component/style.scss')

class App extends Component {
    render () {
        console.log(ThemeSettings)
        return (
            <div id="page-inner">
                <Router>
                    <div>
                        <Header />

                        <div id="content">
                            <Switch>
                                <Route exact path={ThemeSettings.path} component={Posts} />
                                <Route exact path={ThemeSettings.path + 'posts/:slug'} component={Post} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </div>

                        <Footer />
                    </div>
                </Router>
            </div>
        )
    }
}




export default App














// import React from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//
// import Header from './header';
// import Footer from './footer';
// import Posts from './posts';
// import Post from './post';
// import NotFound from './not-found';
// import LoadingIcon from './loading-icon.gif';
// import Placeholder from './placeholder.jpg';
//
// // Load the Sass file
// require('./style.scss');
//
// const App = () => (
//     <div id="page-inner">
//         <Header />
//         <div id="content">
//             <Switch>
//                 <Route exact path={ThemeSettings.path} component={Posts} />
//                 <Route exact path={ThemeSettings.path + 'posts/:slug'} component={Post} />
//                 <Route path="*" component={NotFound} />
//             </Switch>
//         </div>
//         <Footer />
//     </div>
// );
//
// // Routes
// const routes = (
//     <Router>
//         <Route path="/" component={App} />
//     </Router>
// );
//
// render(
//     (routes), document.getElementById('page')
// );
