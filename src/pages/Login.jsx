import React from 'react'
import {Avatar, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import image from "../assets/paper.jpg"
import "../scss/login.scss"


const Login = () => {

// <div sx={{ backgroundImage:`url(${image})` }}>
  return (
<div className='back'>

    <Container component="main" maxWidth="xs" >
            <div className="login">
      
      <Box 
        sx={{
          marginTop: 8,
          marginBottom:3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
                    
        }}
      >
        <Avatar
          alt="avatar_img"
          src="https://cdn.pixabay.com/photo/2017/06/23/08/13/china-2433891_1280.png"
          sx={{ width: 100, height: 100, marginBottom:4}}
        />
        <Typography component="h1" variant="h5" sx={{fontFamily:"Special Elite"}}>
          Sign in
        </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField  
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
       
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
           
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
             sx={{ mt: 3, mb: 2, backgroundColor:"bisque", color:"teal" }}
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