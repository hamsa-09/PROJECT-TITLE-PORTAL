import React from "react";
import { Container, Grid, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function AdminPage() {
  return (
    <div>
      <Typography
        variant="h4"
        style={{ marginBottom: "25px", marginTop: "25px" }}
      >
        Admin Page
      </Typography>
      <Container style={{marginBottom:"20px"}}>
        <Grid container spacing={4} justifyContent="left">
          <Grid item xs={12} sm={6} md={4}>
            <Link to={"/internalregistered"} style={{ textDecoration: "none" }}>
              <Card elevation={5}>
                <img
                  src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg"
                  alt="Internal Details"
                  width="100%"
                />
                <br></br>
                <br></br>
                <Typography variant="h6">
                  {" "}
                  Internal Project Registered
                </Typography>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to={"/ExternalRegistered"} style={{ textDecoration: "none" }}>
              <Card elevation={5}>
                <img
                  src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg"
                  alt="Internal Details"
                  width="100%"
                />
                <br></br>
                <br></br>

                <Typography variant="h6">
                  External Project Registered
                </Typography>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to={'/addinternals'} style={{textDecoration:"none"}}>
            <Card elevation={5}>
              <img
                src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg"
                alt="Internal Details"
                width="100%"
              />
              <br></br>
              <br></br>

              <Typography variant="h6">Add Internal Projects</Typography>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to={"/InternalHandle"} style={{ textDecoration: "none" }}>
              <Card elevation={5}>
                <img
                  src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg"
                  alt="Internal Details"
                  width="100%"
                />
                <br></br>
                <br></br>

                <Typography variant="h6">
             Internal Project Edit
                </Typography>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}