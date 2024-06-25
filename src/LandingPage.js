import React from "react";
import { Container, Grid, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import img from "./images/student1.jpg";
import img1 from './images/staff.jpg';
import img2 from './images/admin.avif';

const LandingPage = () => {
   const imageStyle = {
    width: '250px', // Set a smaller width
   
  
  };

  return (
    <div>
      <br />
     
      <Container>
      <Typography variant="h4" marginTop="40px" ><b>PROJECT TITLE PORTAL</b></Typography>
        <Card style={{ marginTop: "100px", padding: "20px" }} elevation={5}>
          <Grid container spacing={4} justifyContent="center" marginTop="10px">
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/StudentLogin" style={{ textDecoration: "none" }}>
                <img
                  src={img}
                  alt="Student Logo"
                  style={imageStyle}
                 className="hoverEffect"
                />
                <br></br>
                <br></br>
                <Typography color="black">Student</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/StaffLogin" style={{ textDecoration: "none" }}>
                <img
                  src={img1}
                  alt="Teacher Logo"
                  className="hoverEffect"
                  style={imageStyle}
                />
                <br></br>
                <br></br>
                <Typography color="black">Teacher</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/AdminLogin" style={{ textDecoration: "none" }}>
                <img
                  src={img2}
                  alt="Admin Logo"
                  style={imageStyle}
                  className="hoverEffect"
                />
                 <br></br>
                <br></br>
                <Typography color="black">Admin</Typography>
              </Link>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
};

export default LandingPage;
