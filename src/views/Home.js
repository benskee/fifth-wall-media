import React, { Component } from 'react';
import ImageLink from '../components/common/ImageLink';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome to Fifth Wall Media</h1>
                <h5 className='homeTitleSubtext'>Your Video's Bridge to the Internet</h5>
                <h1><br /></h1>
                <div className='row'>
                    <ImageLink link='./code' label='Code' image='code' />
                    <ImageLink link='./chart' label='Chart Deck' image='chartDeck' />
                    <ImageLink link='./animation' label='Animation' image='animation' />
                </div>
                <h1><br /></h1>
                    <div className="container col-6">
                        <p><b>What is the fifth wall?</b><br/><br/>Many people have heard of the fourth wall, which refers to the invisible barrier between performers and their audience. Few people are aware of the fifth wall. The fifth wall represents the wall between the production and the world beyond. This wall can be "broken" when a character refers to other productions the actor portraying them has been in or other world events the character should not know. Fifth Wall Media is using the power of React and the virtual DOM to break the fifth wall by connecting the content of videos with the user and the broader internet. A world of opportunity is opened up when videos can interact directly with the outside world. The code section shows coding tutorials that allow the user to browse and copy code from the current state of the coding project. These projects are just the tip of the iceberg for what can be done with this amazing technology. </p>
                    </div>
                    <div className="container col-6">
                        <img className='img-fluid mt-4' src='./static/gifs/introGif.gif' alt='intro gif'></img>
                    </div>
            </div>
        );
    }
}