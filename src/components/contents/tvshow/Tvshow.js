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
            totalPages: '',
            firstPage: false,
            firstPage: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlePageNumber = this.handlePageNumber.bind(this)
        this.handleFirstPage = this.handleFirstPage.bind(this)
        this.handleSecondPage = this.handleSecondPage.bind(this)
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
        this.setState({option: selectedOption.value, page: 1, firstPage: true})
        this.fetchTv(selectedOption.value, 1)
    }

    handlePageNumber = (n) => {
        this.setState({option: this.state.option, page: n, firstPage: true})
        this.fetchTv(this.state.option, n)
    }

    handleFirstPage = () => {
        this.setState({firstPage: true})
    }

    handleSecondPage = () => {
        this.setState({firstPage: false})
    }

    render() {

        const { tvs, isLoading, option, page, totalPages, firstPage } = this.state
        
        return (
            <Container maxWidth='md'>
                <TvForm
                    tvs={tvs}
                    option={option}
                    isLoading={isLoading}
                    page={page}
                    totalPages={totalPages}
                    firstPage={firstPage}
                    handleChange={this.handleChange}
                    handlePageNumber={this.handlePageNumber}
                    handleFirstPage={this.handleFirstPage}
                    handleSecondPage={this.handleSecondPage}
                />
            </Container>
        )
    }
}

export default Tvshow