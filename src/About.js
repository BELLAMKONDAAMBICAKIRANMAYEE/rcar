import React,{useState} from 'react'
import {AppBar,Typography,Toolbar,Tabs,Tab,Button,useMediaQuery,useTheme} from '@mui/material';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import DrawerComp from './DrawerComp';


const PAGES=["Products" , "Services" , "AboutUs" , "ContactUs"];

const About = () => {

    const[value,setValue]=useState();

    const theme =useTheme();

    console.log(theme);

    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    console.log(isMatch);



  return (

        <React.Fragment>
            <AppBar sx={{background:"#ffb74d"}}>
                <Toolbar>              
                    <ShoppingCartSharpIcon />                    
                           { 
                           isMatch ? (
                             <>
                            <Typography sx={{fontSize:'1.5rem',paddingLeft:"10%"}}>
                                {" "}
                                 SHOPEE
                            </Typography>
                            <DrawerComp/>
                            </>
                           ) : (
                           <>
                            <Tabs 
                            sx={{marginLeft:'auto'}}
                            textcolor="inherit" 
                            value={value} 
                            onChange={(e,value)=> setValue(value)}
                            indicatorColor="secondary">
                       {
                            PAGES.map((page,index)=>(
                                <Tab key={index} label={page}/>
                            ))
                        }
                        
                       
                    </Tabs>
               
                         <Button sx={{marginLeft:"auto"}}variant="contained">Login</Button>
                         <Button sx={{marginLeft:"10px"}} variant="contained">SignUp</Button>
                           </>
                            )
                        }
                        
                   
                </Toolbar>
                
            </AppBar>
            
       
        </React.Fragment>
      
      
    
    
  );
};

export default About;

