import React, { useState } from 'react'
import{Container,Grid,Card,TextField,Typography,Button} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import img from './images/log2.jpg'
import {useNavigate} from'react-router-dom'
  export default function StaffLogin() {
    const [email, setemail]=useState("");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
    const handleLogin=()=>{
     const output={email,password};
     fetch("http://localhost:8080/teacherLogin",{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(output),
     }) 
     .then((response)=>response.json())
     .then ((data)=>{
      if(data.success){
      navigate(`/home?email=${email}`)
     }
    else
     alert("Invalid email or password")
  })
    }
    return (
      <div>
        <Container style={{marginTop:"125px"}}>
  <Grid container spacing={4} justifyContent="center" alignContent="center">
    <Card style={{padding:"25px",marginTop:"40px", marginLeft:"25px", width:"80%" ,maxWidth:"800px",height:"80%",maxHeight:"800px"}} elevation={8}>
      <Grid container spacing ={4} justifyContent="center">
        <Grid item xs={12} sm={12} md={6} style={{padding:"20px"}}>
    <img src={img} style={{marginTop:"50px"}}/>
        </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant='h4'>Staff Login</Typography><br></br><br></br>
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth value={email} onChange={(e)=>setemail(e.target.value)}/><br></br><br></br>
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={password} onChange={(e)=>setpassword(e.target.value)} /><br></br><br></br>
          <Button variant="contained" fullWidth endIcon=<LoginIcon/> onClick={handleLogin}>Login</Button>
          </Grid>
      </Grid>
      
    </Card>
  </Grid>
        </Container>


      </div>
    )
  }