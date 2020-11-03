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
        this.handleChange = this.handleChange.bind(this)
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

    handleChange = (selectedOption) => {
        this.fetchTv(selectedOption.value)
    }

    render() {

        const { tvs, isLoading, option } = this.state
        
        return (
            <Container maxWidth='md'>
                <TvForm
                    option={option}
                    tvs={tvs}
                    isLoading={isLoading}
                    handleChange={this.handleChange}
                />
            </Container>
        )
    }

}

export default Tvshow