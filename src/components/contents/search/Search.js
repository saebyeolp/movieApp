import React,{ Component } from 'react'
import { Container } from '@material-ui/core/';

/* import components */
import { getSearch } from '../../../service/api'
import SearchForm from './SearchForm'


class Search extends Component {

    constructor(){
        super()
        this.state = {
            searchResults: [],
            searchOpt: 'tv',
            query: '',
            isLoading: false,
            input: true,
            page: 1,
            totalPages: ''
        }
        this.handleChangeQuery = this.handleChangeQuery.bind(this)
        this.handleChangeOption = this.handleChangeOption.bind(this)
        this.handleSearchFetch = this.handleSearchFetch.bind(this)
        this.handlePageNumber = this.handlePageNumber.bind(this)
    }

    fetchSearch= async (searchOpt, query, page) => {  

        this.setState({
            isLoading: true
        })

        getSearch(searchOpt, query, page).then(
            searchResults => {
                this.setState({
                    searchResults: searchResults.results,
                    totalPages: searchResults.total_pages,
                    query: query,
                    input: false,
                    searchOpt: searchOpt,
                    isLoading: false,
                })
            },
            error => {
              throw error
            })
    }

    handleChangeQuery = (e) => {
        e.preventDefault()
        this.setState({ ...this.state, query: e.target.value, page: 1})
    }

    handleChangeOption = (selectedOption) => {
        this.setState({ ...this.state, searchOpt: selectedOption.value, page: 1})
    }

    handleSearchFetch = (e) => {
        e.preventDefault()
        this.fetchSearch(this.state.searchOpt, this.state.query, this.state.page)
    }

    handlePageNumber = (n) => {
        this.setState({searchOpt: this.state.searchOpt, page: n})
        this.fetchSearch(this.state.searchOpt, this.state.query, n)
    }

    render(){
        
        const { searchResults, searchOpt, query, isLoading, input, page, totalPages } = this.state

        return (
            <div style={{width: '100%', paddingBottom: 50}}>
               <Container maxWidth='md'>
                    <SearchForm 
                        searchResults={searchResults}
                        searchOpt={searchOpt}
                        query={query}
                        isLoading={isLoading}
                        input={input}
                        page={page}
                        totalPages={totalPages}
                        handleChangeQuery={this.handleChangeQuery}
                        handleChangeOption={this.handleChangeOption}
                        handleSearchFetch={this.handleSearchFetch}
                        handlePageNumber={this.handlePageNumber}
                    />
               </Container>
            </div>
        )
    }
}

export default Search