import React, { useState } from 'react';
import { Container, Grid, Card, CardHeader, CardContent, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import Appbar from './Components/Appbar';

export default function Internal() {
  const [teamSize, setTeamSize] = useState('');
  const [cluster, setCluster] = useState('');
  const [project, setProject] = useState('');

  const handleTeamSizeChange = (event) => {
    setTeamSize(event.target.value);
  };

  const handleClusterChange = (event) => {
    setCluster(event.target.value);
  };

  const handleProjectChange = (event) => {
    setProject(event.target.value);
  };

  return (
    <div>
      <Appbar />
      <Container>
        <Grid container spacing={4} justifyContent="center" marginTop="20px">
          <Grid item xs={12} sm={6} md={12}>
            <Card>
              <CardHeader title="Internal Project" />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required variant="outlined" sx={{ mb: 2 }}>
                      <InputLabel id="team-size-label">Team size</InputLabel>
                      <Select
                        labelId="team-size-label"
                        id="team-size"
                        value={teamSize}
                        onChange={handleTeamSizeChange}
                        label="Team size"
                        color="secondary"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required variant="outlined" sx={{ mb: 2 }}>
                      <InputLabel id="cluster-label">Cluster</InputLabel>
                      <Select
                        labelId="cluster-label"
                        id="cluster"
                        value={cluster}
                        onChange={handleClusterChange}
                        label="Cluster"
                        color="secondary"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Cluster A">Cluster A</MenuItem>
                        <MenuItem value="Cluster B">Cluster B</MenuItem>
                        <MenuItem value="Cluster C">Cluster C</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="team-leader"
                      label="Team Leader"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      required
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="team-leader-roll-no"
                      label="Team Leader Roll no:"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      required
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="member-1"
                      label="Member 1"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="roll-no-1"
                      label="Roll no.1:"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="member-2"
                      label="Member 2"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="roll-no-2"
                      label="Roll no.2:"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>
                <FormControl fullWidth required variant="outlined" sx={{ mb: 2 }}>
                  <InputLabel id="project-label">Project</InputLabel>
                  <Select
                    labelId="project-label"
                    id="project"
                    value={project}
                    onChange={handleProjectChange}
                    label="Project"
                    color="secondary"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Project A">Project A</MenuItem>
                    <MenuItem value="Project B">Project B</MenuItem>
                    <MenuItem value="Project C">Project C</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Status"
                  defaultValue="Pending"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" fullWidth>Submit</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
