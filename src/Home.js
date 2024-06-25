import { Container, Grid, Typography, Card, CardMedia } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Appbar from './Components/Appbar';
import intimage from './images/pro1.png';

export default function Home() {
  return (
    <div>
      <Appbar />
      <Container>
        <Grid container spacing={4} marginTop="20px" justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/internal" style={{ textDecoration: 'none' }}>
              <Card sx={{ '&:hover': { boxShadow: 6 }, border: "none" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={intimage}
                  alt="Image 1"
                />
              </Card>
            </Link>
            <br />
            <Typography>
              Internal Project
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Link to="/external" style={{ textDecoration: 'none' }}>
            <Card sx={{ '&:hover': { boxShadow: 6 } }}>
              <CardMedia
                component="img"
                height="180"
                image={intimage}
                alt="Image 2"
              />
            </Card>
            </Link>
            <br />
            <Typography>
              External Project
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
