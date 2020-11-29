import React from 'react'
import { makeStyles, Button } from '@material-ui/core/';
import logo from './../../img/logo.png'

const getStyles = makeStyles(theme => ({
    headerWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#032541',
      boxSizing: 'border-box'
    },
}))

const Header = () => {
    const classes = getStyles();

    const refreshPage = () => {
        window.location.reload(false);
    }

    return (
        <div className={classes.headerWrapper}>
            <Button onClick={refreshPage} >
                <img src={logo} alt='logo' height='60'/>
            </Button>
        </div>
    )
}

export default Header