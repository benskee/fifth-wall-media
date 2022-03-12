import React, { Component } from 'react'
import Pagination from '../components/common/Pagination';
import { Paginate } from '../utils/Paginate'

export default class PaginationTest extends Component {
    state = {
        pageSize: 12,
        currentPage: 1,
        items: []
    }

    componentDidMount = () => {
        let newItems = []
        for (let x=0;x<30;x++){
            newItems.push(x)
        }
        this.setState( {items: newItems} )
    }

    handlePageChange = page => {
        this.setState({ currentPage: page})
    }

    render() {
    const { currentPage, pageSize, items } = this.state
    
    const count = this.state.items.length
    const pageItems = Paginate(items, currentPage, pageSize)

    return (
      <div>
          <h1>PaginationTest</h1>
          {pageItems.map(item => <p key={item}> {item} </p>)}
          <Pagination itemsCount={count} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange}/>
      </div>
    )
  }
}
