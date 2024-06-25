import {
    Container,
    Card,
    Button,
    TextField,
    Grid,
    Typography,
  } from "@mui/material";
  import * as React from "react";
  import Box from "@mui/material/Box";
  import InputLabel from "@mui/material/InputLabel";
  import MenuItem from "@mui/material/MenuItem";
  import FormControl from "@mui/material/FormControl";
  import Select from "@mui/material/Select";
  
  export default function AddInternal() {
    const [cluster, setcluster] = React.useState("");
  
    const handleChange = (event) => {
      setcluster(event.target.value);
    };
    return (
      <div>
        <Typography
          variant="h4"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Add Internal Projects
        </Typography>
        <br></br>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={8}>
              <Card style={{ padding: "20px" }}>
                <TextField
                  variant="outlined"
                  label="Project Name"
                  placeholder="Project Title"
                  fullWidth
                /><br></br>
                <br></br>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Cluster</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={cluster}
                      label="Cluster"
                      onChange={handleChange}
                    >
                      <MenuItem value={"CSE"}>CSE</MenuItem>
                      <MenuItem value={"ECE"}>ECE</MenuItem>
                      <MenuItem value={"EEE"}>EEE</MenuItem>
                      <MenuItem value={"IT"}>EEE</MenuItem>
                      <MenuItem value={"CT"}>CSE</MenuItem>
  
                    </Select>
                  </FormControl>
                </Box>
                .<br></br>
             
                <Button variant="contained" fullWidth>Submit</Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }