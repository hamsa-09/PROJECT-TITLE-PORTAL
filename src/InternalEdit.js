import React from "react";
import { Container, Card, Button, TextField, Grid, Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {useNavigate} from 'react-router-dom'

export default function InternalHandleEdit() {
  const navigate = useNavigate();
  const [cluster, setcluster] = React.useState("");

  const handleChange = (event) => {
    setcluster(event.target.value);
  };

  return (
    <div>
      <Typography variant="h4">Edit Internal Project Details</Typography>
      <Container>
        <Grid container spacing={5} justifyContent="center" marginTop="25px">
          <Grid item xs={12} sm={7} md={8}>
            <Card style={{ padding: "20px" }} elevation={5}>
              <TextField
                id="outlined-basic"
                label="Project Title"
                variant="outlined"
                fullWidth
              />
            <br></br><br></br>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Cluster</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cluster}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={"CSE"}>CSE</MenuItem>
                    <MenuItem value={"ECE"}>ECE</MenuItem>
                    <MenuItem value={"EEE"}>EEE</MenuItem>
                    <MenuItem value={"IT"}>IT</MenuItem>
                    <MenuItem value={"CT"}>CT</MenuItem>
                  </Select>
                </FormControl>
              </Box><br></br>
              <Button variant="contained" fullWidth onClick={()=>{
                navigate('/InternalHandle')
              }}>Submit</Button>
            </Card>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}