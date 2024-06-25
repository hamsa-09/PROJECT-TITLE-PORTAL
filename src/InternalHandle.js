import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Container, Grid,Table,TableHead,TableRow,TableCell,TableBody, Button,Box} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function InternalHandle() {
    const navigate = useNavigate();
    
  return (
 
        <div>
            <Container style={{marginTop:"25px"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                     
                            <Table style={{overflowX:"auto"}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{border:"solid"}}>Project Title </TableCell>
                                        <TableCell style={{border:"solid"}}>Cluster</TableCell>
                                        <TableCell style={{border:"solid"}}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={{border:"solid"}}>E commerce Project By using React and Springboot - Teacher</TableCell>
                                        <TableCell style={{border:"solid"}}>CSE</TableCell>
                                        <TableCell style={{border:"solid"}}>
                                            <Box sx={{display:"flex", width:"100%", justifyContent:"center", marginTop:"5px", marginBottom:"5px"}}>
                                                <Button style={{marginLeft:"10px"}} variant='contained' onClick={()=>{
                                                    navigate("/internaledit")
                                                }} endIcon={<EditIcon />}>Edit</Button>
                                                <Button variant="contained" style={{marginLeft:"10px", backgroundColor:"red", marginRight:"10px"}} endIcon={<DeleteIcon />}>Delete</Button>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                      
                    </Grid>
                </Grid>
            </Container>
        </div>
  )
}