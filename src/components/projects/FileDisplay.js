import React, { Component } from 'react'
import Files from './Files'
import { getData } from '../../services/fileDisplayService';
import IntroProject from './IntroProject';
import { Paginate } from '../../utils/Paginate'
import Pagination from '../common/Pagination';

export default class FileDisplay extends Component {
    state = {
        files: [],
        pageSize: 5,
        currentPage: 1
    };

    async componentDidMount() {
        let files = await getData()
        this.setState({
            files: files
        });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page})
    }
    render() {
        const { currentPage, pageSize, files: allFiles } = this.state 

        const count = allFiles.length
        const files = Paginate(allFiles, currentPage, pageSize)
        return (
            <div>
                <ul className="row m3">
                    <IntroProject label='Code' type='code'/>
                    <IntroProject label='Animation' type='animation'/>
                    <IntroProject label='Chart Deck' type='chartDeck'/>
                    {this.state.files.length !== 0 && files.map(file => <Files key={file._id} file={file} user={this.props.user}/>)}
                </ul>
                <Pagination itemsCount={count} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange}/>
            </div>
        )
    }
}
