import React from 'react'
import { makeStyles } from '@material-ui/core/';

const getStyles = makeStyles(theme => ({
    headerWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#032541',
      boxSizing: 'border-box'
    },
}))


const Header = () => {
    const classes = getStyles();

    return (
        <div className={classes.headerWrapper}>
            <span>
                <img src='//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' alt='TBDB logo' height='50'/>
            </span>
        </div>
    )
}

export default Header