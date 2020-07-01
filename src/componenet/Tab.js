import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextFields from './EmailInputs'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 300,
    overflow: 'scroll',
    height: '100%'
  }




}));
const styles = {
  MuiTabRoot :{
   backgroundColor: "#ffff",
    }
}
 function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
    
    // this.props.dispatch({
    //   type: 'ADD_POST',
    //   data
    //   })
  }

  return (
    <div className={classes.root}>
      <AppBar  position="static" color="default">
        <Tabs 
        
        style={styles.MuiTabRoot}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab style={{ minWidth: 50 }} label="One" />
          <Tab style={{ minWidth: 50 }} label="Two" />
          <Tab style={{ minWidth: 50 }} label="Three" />
          <Tab style={{ minWidth: 50 }} label="Four" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>Enter Your Signature Details
        
        <TextFields/></TabContainer>
        <TabContainer  dir={theme.direction}>Two</TabContainer>
        <TabContainer dir={theme.direction}>Three</TabContainer>
        <TabContainer dir={theme.direction}>Four</TabContainer>
      </SwipeableViews>
    </div>
  );
}

export default FullWidthTabs;