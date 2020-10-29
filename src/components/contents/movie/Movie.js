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
            isLoading: false
        }
      }

    componentDidMount() {
        this.fetchMovie(this.state.option)
    }

    fetchMovie = async (option) => {

        this.setState({
            isLoading: true
        })
        
        getMovie(option).then(
            movies => {
              this.setState({
                movies: movies,
                isLoading: false
              })
            },
            error => {
              throw error
            })
    }

    handleChangeOption = (e) => {
        e.preventDefault()
        this.setState({ option: e.target.value })
    }
    
    handleMovieFetch = (e) => {
        e.preventDefault()
        this.setState({ option:e.target.value })
        this.fetchMovie(this.state.option);
    }

    render() {

        const { movies, isLoading, option } = this.state
        
        return (
            <Container maxWidth='md'>
                <MovieForm 
                    movies={movies}
                    option={option}
                    isLoading={isLoading}
                    handleChangeOption={this.handleChangeOption}
                    handleMovieFetch={this.handleMovieFetch}
                />
            </Container>
        )
    }

}

export default Movie