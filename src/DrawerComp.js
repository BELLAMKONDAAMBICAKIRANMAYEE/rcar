import React from 'react'
import {Drawer,List,ListItemButton,ListItemIcon,ListItemText,IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'

const PAGES=["Products" , "Services" , "About Us" , "Contact Us","Login","Logout"];
const DrawerComp = () => {
const [openDrawer,setOpenDrawer]=useState(false);
  return (
    <div>
      <React.Fragment>
        <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
           <List>
            {
                PAGES.map((page,index)=>(

               
            <ListItemButton onClick={()=>setOpenDrawer(false)}key={index}>
                <ListItemIcon>
                    <ListItemText>
                       {page}
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
             ))
            }
           </List>
        </Drawer>
        <IconButton sx={{color:"white", marginLeft:"auto"}}onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
      </React.Fragment>
    </div>
  )
}

export default DrawerComp
