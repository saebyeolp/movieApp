import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles, Container, AppBar, Tabs, Tab } from '@material-ui/core/'

/* import components */
import Movie from '../contents/movie/Movie'
import Search from '../contents/search/Search'
import Tvshow from '../contents/tvshow/Tvshow'


const getStyles = makeStyles(theme => ({
    TabScreensWrapper: {
        width: '100%',
        height: 48,
        borderStyle: 'solid',
        backgroundColor: '#FEE510',
        borderBottomWidth: 1,
        borderColor: '#032541'
    },
    indicator: {
      backgroundColor: '#FEE510',
    },
    tabBox: {
      minHeight:400, 
    },
    tabColor: {
      backgroundColor: '#FEE510',
      color: 'black'
    }
}))

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div p={3}>
            <div>{children}</div>
          </div>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabScreens = () => {
    const classes = getStyles()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className={classes.TabScreensWrapper}>
           <Container maxWidth='md'>
                <AppBar position="static">
                    <Tabs 
                      classes={{indicator: classes.indicator}} 
                      className={classes.tabColor}
                      centered 
                      value={value} 
                      onChange={handleChange} 
                      aria-label="simple tabs example"
                    >
                        <Tab style={{width:'33.33%'}} label="Movie" {...a11yProps(0)} />
                        <Tab style={{width:'33.33%'}} label="Search" {...a11yProps(1)} />
                        <Tab style={{width:'33.33%'}} label="TVshow" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
           </Container>

          <TabPanel className={classes.tabBox} value={value} index={0}>
            <Movie />
          </TabPanel>
          <TabPanel className={classes.tabBox} value={value} index={1}>
            <Search />
          </TabPanel>
          <TabPanel className={classes.tabBox} value={value} index={2}>
            <Tvshow />
          </TabPanel>
        </div>
    )
}

export default TabScreens