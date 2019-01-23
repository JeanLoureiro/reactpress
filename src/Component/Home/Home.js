import React, { Component } from 'react'
import { Card, Elevation } from "@blueprintjs/core";

require('./Home.scss')
require('./Experience.scss')
require('./HomeBlog.scss')

class Home extends Component {
    render () {
        return (
            <div>
                <section className="banner">
                    <div className="inner">
                        <h1> Jean Loureiro </h1>
                        <hr className="intro_divider" />
                        <p> Technical Lead + Front End developer!</p>
                        <div className="social_icons">
                            <a href="https://www.facebook.com/Brazil10" className="btn btn-default btn-lg" target="_blank"><i className="fa fa-facebook fa-fw"></i> <span className="network-name">facebook</span></a>
                            <a href="https://github.com/braus" className="btn btn-default btn-lg" target="_blank"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                            <a href="http://au.linkedin.com/in/jeanassis/" className="btn btn-default btn-lg" target="_blank"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                        </div>
                    </div>
                </section>
                <section className="home_blog">
                    <h2>Latest posts</h2>
                        <Card interactive={true} elevation={Elevation.THREE} className="card">
                            <h5><a href="#">How To React</a></h5>
                            <p>How to React today, the new and bright future of js developers</p>
                        </Card>
                        <Card interactive={true} elevation={Elevation.THREE} className="card">
                            <h5><a href="#">How To React</a></h5>
                            <p>How to React today, the new and bright future of js developers</p>
                        </Card>
                        <Card interactive={true} elevation={Elevation.THREE} className="card">
                            <h5><a href="#">How To React</a></h5>
                            <p>How to React today, the new and bright future of js developers</p>
                        </Card>
                </section>
                <section className="experience_education">
                    <h2>Experience and Education</h2>
                    <div className="experience">
                        <Card interactive={true} elevation={Elevation.THREE} className="card">
                            <h5><a href="#">The Code Company</a></h5>
                            <p>Technical Client Lead</p>
                        </Card>
                    </div>
                    <div className="education">
                        <Card interactive={true} elevation={Elevation.THREE} className="card">
                            <h5><a href="#">QUT</a></h5>
                            <p>Graduate Certificate of Project Management</p>
                        </Card>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
