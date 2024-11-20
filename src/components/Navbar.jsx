import React from 'react'
import "../scss/navbar.scss"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/AuthSlice';



const Navbar = () => {

const {email}=useSelector((state)=>state.AuthSlice)

  const navigate = useNavigate()

const dispatch = useDispatch();

  const signOut=()=>{
  dispatch(deleteUser())
   
    }

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

          {email ? (
            <Button color="inherit" onClick={signOut} class='but' >
              LogOut
            </Button>
          ) : (
            <Button color="inherit" class='but'  >LogIn</Button>
          )}
   
           
          
        </Toolbar>
      </AppBar>
    </Box>

  );
}

export default Navbar