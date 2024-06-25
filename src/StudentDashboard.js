import React, { useState } from 'react';
import { Container, Grid, Card, CardHeader, CardContent, TextField, Button } from '@mui/material';
import Appbar from './Components/Appbar';

export default function Internal() {
  const [teamSize, setTeamSize] = useState('5');
  const [cluster, setCluster] = useState('Cluster A');
  const [teamLeader, setTeamLeader] = useState('John Doe');
  const [teamLeaderRollNo, setTeamLeaderRollNo] = useState('12345');
  const [member1, setMember1] = useState('Jane Smith');
  const [rollNo1, setRollNo1] = useState('54321');
  const [member2, setMember2] = useState('Michael Brown');
  const [rollNo2, setRollNo2] = useState('98765');
  const [project, setProject] = useState('Project A');
  const [status, setStatus] = useState('Pending');

  const inputSx = {
    mb: 2,
    '& .MuiInputBase-input': { color: 'black' },
    '& .MuiFormLabel-root': { color: 'green' },
    '& .MuiInputBase-input': { cursor: 'default' },
    '& .MuiInputBase-input': { caretColor: 'transparent' } // Prevent cursor from blinking
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
                    <TextField
                      id="team-size"
                      label="Team Size"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      readOnly
                      value={teamSize}
                      sx={inputSx}
                      multiline
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="cluster"
                      label="Cluster"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      readOnly
                      value={cluster}
                      sx={inputSx}
                      multiline
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
                      readOnly
                      value={teamLeader}
                      sx={inputSx}
                      multiline
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="team-leader-roll-no"
                      label="Team Leader Roll no:"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      readOnly
                      value={teamLeaderRollNo}
                      sx={inputSx}
                      multiline
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
                      readOnly
                      value={member1}
                      sx={inputSx}
                      multiline
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="roll-no-1"
                      label="Roll no.1:"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      readOnly
                      value={rollNo1}
                      sx={inputSx}
                      multiline
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
                      readOnly
                      value={member2}
                      sx={inputSx}
                      multiline
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="roll-no-2"
                      label="Roll no.2:"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      readOnly
                      value={rollNo2}
                      sx={inputSx}
                      multiline
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="project"
                      label="Project"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      readOnly
                      value={project}
                      sx={{ ...inputSx, width: '100%' }}
                      multiline
                      InputProps={{ disableUnderline: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-disabled"
                      label="Status"
                      value={status}
                      fullWidth
                      readOnly
                      sx={inputSx}
                      multiline
                    />
                  </Grid>
                </Grid>
              
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
