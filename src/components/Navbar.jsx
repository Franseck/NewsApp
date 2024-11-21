import React from 'react'
import "../scss/navbar.scss"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/AuthSlice';




const Navbar = () => {

const {email}=useSelector((state)=>state.AuthSlice)
const { loading } = useSelector((state) => state.NewsSlice);



const dispatch = useDispatch();

  const signOut=()=>{
  dispatch(deleteUser())
  loading=false
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
             <span>Breaking </span>  News
          </Typography>

          {email ? (
            <Button  onClick={signOut} class='but'>
              LogOut
            </Button>
          ) : (
            <Button class="but"  >LogIn</Button>
          )}
   
           
          
        </Toolbar>
      </AppBar>
    </Box>

  );
}

export default Navbar