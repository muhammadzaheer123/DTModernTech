import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from '../constants/imgs/dt_logo.png';

import {Link} from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
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
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
  
  backgroundColor:'#130F19',
  height:'100vh',
  margin:-8


   
  },
  tabsPosition:{
  
      marginLeft:'auto'
  },
  logo:{
      height:140,
      width:140,
      position:'absolute',
      objectFit:'contain',
      top:-20,
      left:10
    
  },
  insideTab:{
    padding:0,
    minWidth:120
     
  },

}));

export default function About() {
  const classes = useStyles();
  const [value, setValue] = React.useState('About us');
  const   insideMinWidth={
    minWidth:100
}
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{boxShadow:'none',backgroundColor:'#130F19',marginTop:10}}>
          <img alt ="logo" className={classes.logo} src={Logo}   />
        <Tabs indicatorColor="black" className={classes.tabsPosition} value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
          Link=""
          component={Link} to="/" 
   
            value="Home"
            label="Home"
            wrapped
            {...a11yProps('Home')}
            style={{minWidth:60}}
          />
  
  <Tab  component={Link} to="/about"    style={insideMinWidth}  value="About us" label="About us" {...a11yProps('About us')} />
          <Tab  component={Link} to="/work"   style={insideMinWidth} value="How this works" label="How this works" {...a11yProps('How this works')} />
          <Tab  component={Link} to="/benefit"   style={insideMinWidth} value="Benefits" label="Benefits" {...a11yProps('Benefits')} />
          <Tab  component={Link} to="/gallery"   style={{minWidth:60}} value="Gallery" label="Gallery" {...a11yProps('Gallery')} />
          <Tab  component={Link} to="/shop"   style={{minWidth:60}} value="Shop" label="Shop" {...a11yProps('Shop')} />
          <Tab  component={Link} to="/faq"   style={{minWidth:60}} value="Faqs" label="Faqs" {...a11yProps('Faqs')} />
          <Tab  component={Link} to="/contact"   style={{minWidth:60}} value="Contact" label="Contact" {...a11yProps('Contact')} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index="Home">
        Home
      </TabPanel>
      <TabPanel value={value} index="About us">
        About us
      </TabPanel>
      <TabPanel value={value} index="How this works">
      How this works
      </TabPanel>
      <TabPanel value={value} index="Benefits">
      Benefits
      </TabPanel>
    
      <TabPanel value={value} index="Gallery">
      Gallery
      </TabPanel>
      <TabPanel value={value} index="Shop">
      Shop
      </TabPanel>
      <TabPanel value={value} index="Faqs">
      Faqs
      </TabPanel>
      <TabPanel value={value} index="Contact">
      Contact
      </TabPanel>
    </div>
  );
}