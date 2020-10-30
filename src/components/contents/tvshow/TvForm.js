import React from 'react'
import { makeStyles, FormControl, Select, MenuItem, Button } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';

import TvLists from './TvLists'

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
    }
}))

const TvForm = (props) => {

    const classes = getStyles()

    return (
        <div className={classes.optionBox}>
            <FormControl variant="outlined" className={classes.formControl}>

                <Select
                    defaultValue="airing_today"
                    onChange={props.handleChangeOption}
                    style={{width: 270, marginRight: 10}}
                >
                    <MenuItem value="airing_today">airing_today</MenuItem>
                    <MenuItem value="on_the_air">on-the-air</MenuItem>
                    <MenuItem value="popular">popular</MenuItem>
                    <MenuItem value="top_rated">top-rated</MenuItem>
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

            <div style={{width:'100%', paddingTop:30, paddingBottom: 60, display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {
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