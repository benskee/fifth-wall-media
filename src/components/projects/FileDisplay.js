import React, { useState, useEffect } from 'react'
import Files from './Files'
import { getData } from '../../services/fileDisplayService';
import IntroProject from './IntroProject';
import { Paginate } from '../../utils/Paginate'
import Pagination from '../common/Pagination';
import Spinner from '../common/Spinner';

function FileDisplay(props) {
    const [allFiles, setAllFiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const pageSize = 5

    useEffect(async () => {
        let fileData = await getData()
        if (fileData) {
            setAllFiles(fileData);
            setLoading(false);
        }
    }, [])

    const handlePageChange = page => {
        setCurrentPage(page)
    }

    const count = allFiles.length
    const files = Paginate(allFiles, currentPage, pageSize)
    
    return (
        <div>
            <ul className="row m3">
                <IntroProject label='Code' type='code'/>
                <IntroProject label='Animation' type='animation'/>
                <IntroProject label='Chart Deck' type='chartDeck'/>
                {allFiles.length !== 0 && files.map(file => <Files key={file._id} file={file} user={props.user}/>)}
                {loading ? <li id='fileDisplaySpinner'>
                    <Spinner />
                </li> : null}
            </ul>
            <Pagination itemsCount={count} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
        </div>
    )
}

export default FileDisplay