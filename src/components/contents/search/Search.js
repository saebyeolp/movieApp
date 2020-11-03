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
            input: true
        }
        this.handleChangeQuery = this.handleChangeQuery.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearchFetch = this.handleSearchFetch.bind(this)
    }

    fetchSearch= async (searchOpt, query) => {  

        this.setState({
            isLoading: true
        })

        getSearch(searchOpt, query).then(
            searchResults => {
                this.setState({
                    searchResults: searchResults,
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
        this.setState({ ...this.state, query: e.target.value})
    }

    handleChange = (selectedOption) => {
        this.setState({ ...this.state, searchOpt: selectedOption.value})
    }

    handleSearchFetch = (e) => {
        e.preventDefault()
        this.fetchSearch(this.state.searchOpt, this.state.query)
    }

    render(){
        
        const { searchResults, searchOpt, query, isLoading, input } = this.state

        return (
            <div style={{width: '100%', paddingBottom: 50}}>
               <Container maxWidth='md'>
                    <SearchForm 
                        searchResults={searchResults}
                        searchOpt={searchOpt}
                        query={query}
                        isLoading={isLoading}
                        input={input}
                        handleChangeQuery={this.handleChangeQuery}
                        handleChange={this.handleChange}
                        handleSearchFetch={this.handleSearchFetch}
                    />
               </Container>
            </div>
        )
    }
}

export default Search