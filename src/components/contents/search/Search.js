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
            isLoading: false,
            searchOpt: '',
            query: ''
        }
        this.handleChangeQuery = this.handleChangeQuery.bind(this);
        this.handleChangeOption = this.handleChangeOption.bind(this);
        this.handleSearchFetch = this.handleSearchFetch.bind(this);
    }

    fetchSearch= async (searchOpt, query) => {
        
        getSearch(searchOpt, query).then(
            searchResults => {
              this.setState({
                searchResults: searchResults,
                isLoading: false
              })
            },
            error => {
              throw error
            })
    }

    handleChangeQuery = (e) => {
        e.preventDefault()
        this.setState({ ...this.state, query: e.target.value })
    }

    handleChangeOption = (e) => {
        e.preventDefault()
        this.setState({ ...this.state, searchOpt: e.target.value })
    }

    handleSearchFetch = (e) => {
        e.preventDefault()
        this.setState({searchOpt: e.target.value, query: e.target.value})
        this.fetchSearch(this.state.searchOpt, this.state.query);
    }

    render(){
        
        const { searchResults, isLoading, searchOpt, query } = this.state

        return (
            <div style={{width: '100%', paddingBottom: 50}}>
               <Container maxWidth='md'>
                    <SearchForm 
                        searchOpt={searchOpt}
                        query={query}
                        searchResults={searchResults}
                        handleChangeQuery={this.handleChangeQuery}
                        handleChangeOption={this.handleChangeOption}
                        handleSearchFetch={this.handleSearchFetch}
                    />
               </Container>
            </div>
        )
    }
}

export default Search