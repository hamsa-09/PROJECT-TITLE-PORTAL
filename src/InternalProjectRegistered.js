import React from "react";
import { Table, Button, TableRow, TableCell, Typography,  Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
export default function InternalProjectRegistered() {
  return (
    <div>
      
        <Table>
          <TableRow style={{textAlign:"center"}}>
            <TableCell><Typography variant="h6"> Id</Typography></TableCell>
            <TableCell><Typography variant="h6"> Team Size</Typography></TableCell>
            <TableCell><Typography variant="h6"> Cluster</Typography></TableCell>
            <TableCell><Typography variant="h6"> Team Leader</Typography></TableCell>
            <TableCell><Typography variant="h6"> Team Leader Roll Number</Typography></TableCell>
            <TableCell><Typography variant="h6"> Member 1</Typography></TableCell>
            <TableCell><Typography variant="h6"> Member 1 Roll Number</Typography></TableCell>
            <TableCell><Typography variant="h6"> Member 2</Typography></TableCell>
            <TableCell><Typography variant="h6"> Member 2 Roll Number</Typography></TableCell>
            <TableCell><Typography variant="h6"> Project Title</Typography></TableCell>
            <TableCell><Typography variant="h6"> Status</Typography></TableCell>
            <TableCell><Typography variant="h6"> Action</Typography></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>101</TableCell>
            <TableCell> 3 </TableCell>
            <TableCell>CSE</TableCell>
            <TableCell>Hamsavardhini B</TableCell>
            <TableCell>7376221CS159</TableCell>
            <TableCell>Member 1</TableCell>
            <TableCell>7376221xxxxx</TableCell>
            <TableCell>Member 2</TableCell>
            <TableCell>7376221xxxxx</TableCell>
            <TableCell> Project Selection website</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell><Button endIcon=<EditIcon/>>Edit</Button></TableCell>
          </TableRow>
        </Table>
     <Box sx={{textAlign:"right",margin:"10px"}}>
     <Button endIcon=<DownloadIcon/>>Download</Button>
     </Box>
    </div>
  );
}