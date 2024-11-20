import React from 'react'
import "../scss/navbar.scss"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

  const navigate = useNavigate()

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar class="nav" position="static" >
        <Toolbar >
          <Typography 
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer", fontFamily:"Special Elite" }}
          >
             News
          </Typography>

   
            <Button onClick={()=>navigate("/Login") } class="but" >LogIn</Button>
          
        </Toolbar>
      </AppBar>
    </Box>

  );
}

export default Navbar