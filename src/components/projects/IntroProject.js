import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class IntroProject extends Component {
    render() {
        const { label, type } = this.props
        return (
            <div className="card m-2 border border-dark">
                <img className="card-img-top" src={`./static/images/${type}_image.png`} alt="Project" />
                <div className="card-body">
                    <h5 className="card-title mb-2">{label} Intro</h5>
                    <p className="card-text mt-4">Type: <b>{type}</b></p>
                    <Link to='/code' className="btn btn-primary mr-2 mb-2">View Project</Link>
                </div>
            </div>
        )
    }
}
