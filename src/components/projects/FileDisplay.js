import React, { Component } from 'react'
import Files from './Files'
import { getData } from '../../services/fileDisplayService';
import IntroProject from './IntroProject';
import { Paginate } from '../../utils/Paginate'
import Pagination from '../common/Pagination';
import Spinner from '../common/Spinner';

export default class FileDisplay extends Component {
    state = {
        files: [],
        pageSize: 5,
        currentPage: 1,
        loading: true
    };

    async componentDidMount() {
        let files = await getData()
        if (files) {this.setState({
            files: files,
            loading: false
        });}
    }

    handlePageChange = page => {
        this.setState({ currentPage: page})
    }
    render() {
        const { currentPage, pageSize, files: allFiles, loading } = this.state 

        const count = allFiles.length
        const files = Paginate(allFiles, currentPage, pageSize)
        return (
            <div>
                <ul className="row m3">
                    <IntroProject label='Code' type='code'/>
                    <IntroProject label='Animation' type='animation'/>
                    <IntroProject label='Chart Deck' type='chartDeck'/>
                    {this.state.files.length !== 0 && files.map(file => <Files key={file._id} file={file} user={this.props.user}/>)}
                    {loading ? <li id='fileDisplaySpinner'>
                        <Spinner />
                    </li> : null}
                </ul>
                <Pagination itemsCount={count} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange}/>
            </div>
        )
    }
}
