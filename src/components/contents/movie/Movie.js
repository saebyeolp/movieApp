import React, { Component } from 'react'
import { Container } from '@material-ui/core/';

/* import components */
import { getMovie } from '../../../service/api'
import MovieForm from './MovieForm'


class Movie extends Component {

    constructor(){
        super()
        this.state = {
            movies: [],
            option: 'now_playing',
            isLoading: false,
            page: 1,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlePageNumber = this.handlePageNumber.bind(this)
      }

    componentDidMount() {
        this.fetchMovie(this.state.option, this.state.page)
    }

    fetchMovie = async (option, page) => {

        this.setState({
            isLoading: true
        })
        
        getMovie(option, page).then(
            movies => {
              this.setState({
                movies: movies,
                isLoading: false,
              })
            },
            error => {
              throw error
        })
    }

    handleChange = (selectedOption) => {
        this.setState({option: selectedOption.value, page: 1})
        this.fetchMovie(selectedOption.value, 1)
    }

    handlePageNumber = (n) => {
        this.setState({option: this.state.option, page: n})
        this.fetchMovie(this.state.option, n)
    }

    render() {

        const { movies, isLoading, option, page } = this.state
        
        return (
            <Container maxWidth='md'>
                <MovieForm 
                    movies={movies}
                    option={option}
                    isLoading={isLoading}
                    page={page}
                    handleChange={this.handleChange}
                    handlePageNumber={this.handlePageNumber}
                />

            </Container>
        )
    }

}

export default Movie