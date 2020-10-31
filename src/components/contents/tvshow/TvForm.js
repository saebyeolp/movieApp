import React from 'react'
import { makeStyles, FormControl, Select, MenuItem, Button } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';

import TvLists from './TvLists'
import Loading from '../Loading'

const getStyles = makeStyles(theme => ({
    optionBox: {
        width: '100%',
        marginTop: 20,
    },
    formControl: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
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
        {key: 1, value: 'airing_today'},
        {key: 2, value: 'on_the_air'},
        {key: 3, value: 'popular'},
        {key: 4, value: 'top_rated'}
    ] 

    const optionItems = options.map((option) =>
        <option 
            key={option.key} 
            value={option.value}>
            {option.value}
        </option>
    );

    return (
        <div className={classes.optionBox}>
            <FormControl variant="outlined" className={classes.formControl}>

                <Select
                    native
                    defaultValue="airing_today"
                    onChange={props.handleChangeOption}
                    style={{width: 270, marginRight: 10}}
                >
                    {optionItems}
                </Select>
                <Button
                    variant="contained"
                    color="primary"
                    className="button"
                    onClick={props.handleTvFetch}
                >
                    <SearchIcon/>
                </Button>

            </FormControl>

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
        </div>
    )
}

export default TvForm