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
        }
        this.handleChange = this.handleChange.bind(this)
      }

    componentDidMount() {
        this.fetchMovie('now_playing')
    }

    fetchMovie = async (option) => {

        this.setState({
            isLoading: true
        })
        
        getMovie(option).then(
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
        console.log(selectedOption)
        this.fetchMovie(selectedOption.value)
    }

    render() {

        const { movies, isLoading, option } = this.state
        
        return (
            <Container maxWidth='md'>
                <MovieForm 
                    movies={movies}
                    option={option}
                    isLoading={isLoading}
                    handleChange={this.handleChange}
                />

            </Container>
        )
    }

}

export default Movie