import React, { Component } from 'react'
import { Container } from '@material-ui/core/';

/* import components */
import { getTV } from '../../../service/api'
import TvForm from './TvForm'


class Tvshow extends Component {

    constructor(){
        super()
        this.state = {
            tvs: [],
            isLoading: false,
            option: 'airing_today'
        }
      }

    componentDidMount() {
        this.fetchTv(this.state.option)
    }

    fetchTv = async (option) => {
        
        getTV(option).then(
            tvs => {
              this.setState({
                tvs: tvs,
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

    handleTvFetch = (e) => {
        e.preventDefault()
        this.setState({option:e.target.value})
        this.fetchTv(this.state.option);
    }

    render() {

        const { tvs, isLoading, option } = this.state
        
        return (
            <Container maxWidth='md'>
                <TvForm
                    option={option}
                    tvs={tvs}
                    isLoading={isLoading}
                    handleChangeOption={this.handleChangeOption}
                    handleTvFetch={this.handleTvFetch}
                />
            </Container>
        )
    }

}

export default Tvshow