import React from 'react'
import { makeStyles } from '@material-ui/core/';
import Select from 'react-select'

/* import components */
import TvLists from './TvLists'
import Loading from '../Loading'
import Pagination from '../Pagination'


const getStyles = makeStyles(theme => ({
    optionBox: {
        width: '100%',
        marginTop: 20,
    },
    selectFlex: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        display: 'inline-block',
        width: '10%'
    },
    listBox: {
        width:'100%', 
        paddingTop:30, 
        paddingBottom: 60, 
        display:'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center'
    }
}))


const TvForm = (props) => {

    const classes = getStyles()

    const options =  [
        {label: 'Airing_Today', value: 'airing_today'},
        {label: 'On_The_Air', value: 'on_the_air'},
        {label: 'Popular', value: 'popular'},
        {label: 'Top_Rated', value: 'top_rated'}
    ] 

    return (
        <div className={classes.optionBox}>

            <div className={classes.selectFlex}>
                <Select 
                    placeholder={'Airing_Today'}
                    theme={theme => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            neutral50: '#333', 
                        },
                    })}
                    options={options}
                    onChange={props.handleChange}
                    classNamePrefix='filter'
                />
            </div>

            <div className={classes.listBox}>
                {   props.isLoading ? <Loading /> :
                    props.tvs.map((tv, i) => {
                        return (
                            <TvLists 
                                key={i}
                                name={tv.name}
                                first_air_date={tv.first_air_date}
                                popularity={tv.popularity}
                                overview={tv.overview}
                                poster_path={tv.poster_path}
                            />
                        )
                    })
                }
            </div>

            {   props.isLoading ? '' :
                <Pagination 
                    page={props.page}
                    totalPages={props.totalPages}
                    handlePageNumber={props.handlePageNumber}
                />
            }

        </div>
    )
}

export default TvForm