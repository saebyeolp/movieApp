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
            noData : false,
            isLoading: false,
            searchOpt: '',
            query: ''
        }
        this.handleChangeQuery = this.handleChangeQuery.bind(this)
        this.handleChangeOption = this.handleChangeOption.bind(this)
        this.handleSearchFetch = this.handleSearchFetch.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    fetchSearch= async (searchOpt, query) => {  

        this.setState({
            isLoading: true
        })

        getSearch(searchOpt, query).then(
            searchResults => {
                if(!searchResults.length){
                    this.setState({
                      noData: true
                    })
                } else {
                    this.setState({
                        searchResults: searchResults,
                        isLoading: false,
                        noData: false
                      })
                }
            },
            error => {
              throw error
            })
    }

    handleClear = () => {
        this.setState({
            query: '',
            searchOpt: ''
        })
    }

    handleChangeQuery = (e) => {
        e.preventDefault()
        this.setState({ ...this.state, query: e.target.value})
    }

    handleChangeOption = (e) => {
        e.preventDefault()
        this.setState({ ...this.state, searchOpt: e.target.value})
    }

    handleSearchFetch = (e) => {
        e.preventDefault()
        this.setState({searchOpt: e.target.value, query: e.target.value})
        this.fetchSearch(this.state.searchOpt, this.state.query);

    }

    render(){
        
        const { searchResults, isLoading, searchOpt, query, noData } = this.state

        return (
            <div style={{width: '100%', paddingBottom: 50}}>
               <Container maxWidth='md'>
                    <SearchForm 
                        searchOpt={searchOpt}
                        query={query}
                        searchResults={searchResults}
                        isLoading={isLoading}
                        noData={noData}
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