import React, { Component } from 'react';
import ImageLink from '../components/common/ImageLink';

export default class Home extends Component {
    render() {
        return (
            <div className="container m-2">
                <h1>Welcome to Fifth Wall Media</h1>
                <h5 className='homeTitleSubtext'>Your Video's Bridge to the Internet</h5>
                <h1><br /></h1>
                <div className='row'>
                    <ImageLink link='./code' label='Code' image='code' />
                    <ImageLink link='./chart' label='Chart Deck' image='chartDeck' />
                    <ImageLink link='./animation' label='Animation' image='animation' />
                </div>
            </div>
        );
    }
}