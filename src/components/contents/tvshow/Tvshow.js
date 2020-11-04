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
            option: 'airing_today',
            isLoading: false,
            page: 1,
            totalPages: ''
        }
        this.handleChange = this.handleChange.bind(this)
      }

    componentDidMount() {
        this.fetchTv(this.state.option, this.state.page)
    }

    fetchTv = async (option, page) => {

        this.setState({
            isLoading: true
        })
        
        getTV(option, page).then(
            tvs => {
              this.setState({
                tvs: tvs.results,
                totalPages: tvs.total_pages,
                isLoading: false
              })
            },
            error => {
              throw error
            })
    }

    handleChange = (selectedOption) => {
        this.setState({option: selectedOption.value, page: 1})
        this.fetchTv(selectedOption.value, 1)
    }

    handlePageNumber = (n) => {
        this.setState({option: this.state.option, page: n})
        this.fetchTv(this.state.option, n)
    }

    render() {

        const { tvs, isLoading, option, page, totalPages } = this.state
        
        return (
            <Container maxWidth='md'>
                <TvForm
                    tvs={tvs}
                    option={option}
                    isLoading={isLoading}
                    page={page}
                    totalPages={totalPages}
                    handleChange={this.handleChange}
                    handlePageNumber={this.handlePageNumber}
                />
            </Container>
        )
    }

}

export default Tvshow