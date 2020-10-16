import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from '../constants/imgs/dt_logo.png';
import Phone from '@material-ui/icons/Phone';
import Room from '@material-ui/icons/Room';
import Email from '@material-ui/icons/Email';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Facebook from  '@material-ui/icons/Facebook';
import Youtube from  '@material-ui/icons/YouTube';
import Instagram from  '@material-ui/icons/Instagram'

import {Link} from 'react-router-dom';
import { ClassSharp } from '@material-ui/icons';

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
  height:'100%',
  margin:-8,
  backgroundColor:'#130F19',


   
  },
  tabsPosition:{
  
      marginLeft:'auto'
  },
  logo:{
      height:140,
      width:140,
      position:'absolute',
      objectFit:'contain',
       top:-10
    
  },
  insideTab:{
    padding:0,
    minWidth:120
     
  },
  bodyDesign:{
    marginTop:120,
  },
  bodyContainer:{
      width:400,
      height:250,
      backgroundColor:'white',
      borderRadius:20,
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      flexDirection:'column',
      
    
  
 
  },
  messageContainer:{
    width:'100%',
    backgroundColor:'#130F19',
    marginTop:100

  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: " #272727' !important",
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: 'white !important',
   
    }
  },
  
  cssLabel: {
    color: "white",
    borderWidth: "1px",
    borderColor: "white !important"
 
  },
  cssFocused:{
     color:'white',
     borderWidth: "1px",
     borderColor: "white !important"
  },
  buttonStyle:{
    color:'white',
    backgroundColor:'#D7B729' ,
    width:150, 
    '&:hover': {backgroundColor: '#272727',color: '#FFF',borderColor:'#D7B729',color:'#D7B729',border:'1px solid' }
  },
  subBodyContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'90%',
    marginTop:80
   
   
    
 


  },
  headerStyle:{
    color:'white',
    marginTop:0,
    fontFamily:'Roboto'
    

  },
  listStyle:{
    marginTop:10,
    color:'#D7B729',
   
  }




}));

export default function Contact() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Contact');
  const   insideMinWidth={
    minWidth:100
}
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{boxShadow:'none',backgroundColor:'#130F19'}} position="static">
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
    
<div className={classes.bodyDesign}>
    <div style={{textAlign:'center'}}>
      <text style={{fontSize:'50px',color:'#D5B500'}}>
          Contact us
      </text>
      </div>
      <div style={{display:'flex',paddingLeft:20,paddingRight:20,marginTop:30}}>
      <Box className={classes.bodyContainer}>
      <Phone  style={{width:50,height:50,color:'#D5B500'}}  />
      <text style={{fontSize:20,color:'black',marginTop:20,fontFamily:'Roboto'}}>CALL US</text>
      <text style={{fontSize:20,color:'black',marginTop:20,fontFamily:'Roboto'}}>123-456-789</text>

      </Box>
      <Box  boxShadow={20} style={{marginLeft:100,backgroundColor:'#161616'}} className={classes.bodyContainer}>
      <Room  style={{width:50,height:50,color:'white'}}  />
      <text style={{fontSize:20,color:'white',marginTop:20,fontFamily:'Roboto'}}>DT MODERN TECHNOLOGY</text>
<text style={{fontSize:20,color:'white',marginTop:20,fontFamily:'Roboto'}}>Lahore Pakistan</text>
<text style={{fontSize:20,color:'white',marginTop:20,fontFamily:'Roboto'}}>Butt Sweet</text>
          

</Box>
<Box style={{marginLeft:100}} className={classes.bodyContainer}>
     <Email  style={{width:50,height:50,color:'#D5B500'}}  />
      <text style={{fontSize:20,color:'black',marginTop:20,fontFamily:'Roboto'}}>EMAIL US</text>
      <text style={{fontSize:20,color:'black',marginTop:20,fontFamily:'Roboto'}}>dtmoderntech@gmail.com</text>
          </Box>
      </div>
      </div>
      <div className={classes.messageContainer}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',paddingLeft:20,paddingRight:20}}>
          <text style={{color:'white',fontSize:20,fontFamily:'Roboto'}}>SEND US MESSGE</text>
          <TextField
          style={{marginTop:50,backgroundColor:'#272727',color:'white'}}
        id="Name"
        label="Name"
        variant="outlined"
        InputProps={{ 
          classes: {
            root: classes.cssOutlinedInput, 
           focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
         
          
          },
          inputMode: "numeric"
        }}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            // focused: classes.cssFocused
          }}}
        fullWidth={true}
        
      />
      
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:40}}>
        <TextField
        style={{backgroundColor:'#272727'}}  id="email"
        label="Email"
        variant="outlined"
        InputProps={{ 
          classes: {
            root: classes.cssOutlinedInput, 
           focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
         
          
          },
          inputMode: "numeric"
        }}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            // focused: classes.cssFocused
          }}}
        fullWidth={true}
         />

        <TextField
        style={{marginLeft:20,backgroundColor:'#272727'}}
         id="password"
         label="Password"
         variant="outlined"
         InputProps={{ 
          classes: {
            root: classes.cssOutlinedInput, 
           focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
         
          
          },
          inputMode: "numeric"
        }}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            // focused: classes.cssFocused
          }}}
        fullWidth={true}
         />
        </div>
        <TextField
        style={{backgroundColor:'#272727',marginTop:40,marginBottom:20}}  id="message"
        label="Message"
        variant="outlined"
        multiline
        rows={10}
        InputProps={{ 
          classes: {
            root: classes.cssOutlinedInput, 
           focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
         
          
          },
          inputMode: "numeric"
        }}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            // focused: classes.cssFocused
          }}}
        fullWidth={true}
         />
           <Button variant="contained" className={classes.buttonStyle} >
                Submit
             </Button>
             <div style={{border:'3px solid',color:'#272727',marginTop:40,width:'100%'}} />
             <div className={classes.subBodyContainer}>
              <div>
              
                 <h1 className={classes.headerStyle}>INFORMATION</h1>
              
                 <ul>
                   <li style={{color:'#D7B729'}}> 
                   <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>FAQ</text> 
                   </li>
                   <li className={classes.listStyle}>
                    <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>Order Now</text> 
                   </li>
                   <li className={classes.listStyle}>
                <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>Full Custom Card</text> 
                </li>
                 </ul>
              </div>
              <div>
                  <h1 className={classes.headerStyle}>MY ACCOUNT</h1>
                  <ul>
                   <li style={{color:'#D7B729'}}> 
                   <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>My Account</text> 
                   </li>
                   <li className={classes.listStyle}>
                    <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>Shopping Cart</text> 
                   </li>
                   <li className={classes.listStyle}>
                <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>Order History</text> 
                </li>
                 </ul>
                </div>
              <div>
                 <h1 className={classes.headerStyle}>CUSTOMER SERVICES</h1>
                 <ul>
                   <li style={{color:'#D7B729'}}> 
                   <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>Contact Us</text> 
                   </li>
                   <li className={classes.listStyle}>
                    <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>How It Works</text> 
                   </li>
                   <li className={classes.listStyle}>
                    <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>Help</text> 
                   </li>
                 </ul>
                </div>
               <div>
                 <div>
                <h1 className={classes.headerStyle}>FOLLOW US</h1>
                <div style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                   <Facebook  style={{width:30,height:30,color:'white',borderRadius:'50%',marginRight:10}}  />
                   <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>Facebook</text> 
                   </div>
                   <div style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                   <Youtube  style={{width:30,height:30,color:'white',borderRadius:'50%',marginRight:10}}  />
                   <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>Youtube</text> 
                   </div>
                   <div style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                   <Instagram  style={{width:30,height:30,color:'white',borderRadius:'50%',marginRight:10}}  />
                   <text style={{color:'#a2a2a2',fontFamily:'Roboto'}}>Youtube</text> 
                   </div>
           
           
              </div>
           
              </div>
           

             </div>
             <div style={{marginTop:50,width:'100%',backgroundColor:'#272727',paddingLeft:20}}>
                <text style={{color:'#D5B500',fontSize:16,fontFamily:'Roboto'}}>Copyright © 2020 DT Modern Technology. All Rights Reserved</text>

              </div>

       
        </div>


      </div>
    </div>
  );
}