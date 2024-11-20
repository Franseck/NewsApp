import React from 'react'
import {Avatar, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import Logo from "../assets/Logo.png"
import "../scss/login.scss"
import { useDispatch, useSelector } from 'react-redux';
import {createUser} from "../redux/AuthSlice"
import { useNavigate } from 'react-router-dom';



const Login = () => {

let {email, password} = useSelector((state)=>state.AuthSlice);
const navigate = useNavigate()


const dispatch = useDispatch();
dispatch(createUser({email,password}) )

const handleSubmit = (e)=> {
  e.prevent.default()
}

navigate ("/")

  return (
<div className='back'>
<h1>Seckin's News Agency</h1>
<img src={Logo}   alt="" />
    <Container component="main" maxWidth="xs" >
            <div className="login">
      
      <Box 
      onSubmit={handleSubmit}
        sx={{
          marginTop: 8,
          marginBottom:3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
                  
        }}
      >
        <Avatar
          alt="avatar"
          src="https://cdn.pixabay.com/photo/2017/06/23/08/13/china-2433891_1280.png"
          sx={{ width: 100, height: 100, marginBottom:4}}
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField  
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address (a@a.com)"
            name="email"
            autoComplete="email"
            autoFocus
       onChange={(e)=> (email= e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password (1234)" 
            type="password"
            id="password"
            onChange={(e)=> (password= e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
             sx={{ mt: 3, mb: 2, backgroundColor:"bisque", color:"black" }}
          >
            Sign In
          </Button>
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="">
          Seckin News Agency
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      </div>
    </Container>

</div>
  );
}

export default Login