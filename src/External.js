import React from 'react';
import { Container, Grid, Card, CardHeader, CardContent, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export default function External() {
  const [teamSize, setTeamSize] = React.useState('');

  const handleTeamSizeChange = (event) => {
    setTeamSize(event.target.value);
  };

  return (
    <div>
      <Container>
        <Grid container spacing={4} justifyContent="center" marginTop="20px">
          <Grid item xs={12} sm={6} md={12}>
            <Card>
              <CardHeader title="External Project" />
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
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="cluster"
                      label="Domain"
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
                      disabled={teamSize < 2}
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
                      disabled={teamSize < 2}
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
                      disabled={teamSize < 3}
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
                      disabled={teamSize < 3}
                    />
                  </Grid>
                </Grid>
                <TextField
                  id="project"
                  label="Project"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  id="Guide"
                  label="Guide"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Status"
                  defaultValue="Pending"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Button variant="contained">Submit</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
