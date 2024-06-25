import React from 'react'
import { Table, Button, TableRow, TableCell, Typography, Box } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

export default function ExternalRegisterd() {
  return (
    <div>
      <Table sx={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <TableRow sx={{ border: "1px solid black", textAlign: "center" }}>
          <TableCell sx={{ border: "1px solid black" }}>
            <Typography variant="h6">Id</Typography>
          </TableCell>
          <TableCell sx={{ border: "1px solid black" }}>
            <Typography variant="h6">Team Size</Typography>
          </TableCell>
          <TableCell sx={{ border: "1px solid black" }}>
            <Typography variant="h6">Cluster</Typography>
          </TableCell>
          <TableCell sx={{ border: "1px solid black" }}>
            <Typography variant="h6">Team Leader</Typography>
          </TableCell>
          <TableCell sx={{ border: "1px solid black" }}>
            <Typography variant="h6">Team Leader Roll Number</Typography>
          </TableCell>
          <TableCell sx={{ border: "1px solid black" }}>
            <Typography variant="h6">Member 1</Typography>
          </TableCell>
          <TableCell sx={{ border: "1px solid black" }}>
            <Typography variant="h6">Member 1 Roll Number</Typography>
          </TableCell>
          <TableCell sx={{ border: "1px solid black" }}>
            <Typography variant="h6">Member 2</Typography>
          </TableCell>
          <TableCell sx={{ border: "1px solid black" }}>
            <Typography variant="h6">Member 2 Roll Number</Typography>
          </TableCell>
          <TableCell sx={{ border: "1px solid black" }}>
            <Typography variant="h6">Project Title</Typography>
          </TableCell>
          <TableCell sx={{ border: "1px solid black" }}>
            <Typography variant="h6">Status</Typography>
          </TableCell>
        </TableRow>
        <TableRow sx={{ border: "1px solid black" }}>
          <TableCell sx={{ border: "1px solid black" }}>101</TableCell>
          <TableCell sx={{ border: "1px solid black" }}>3</TableCell>
          <TableCell sx={{ border: "1px solid black" }}>CSE</TableCell>
          <TableCell sx={{ border: "1px solid black" }}>Hamsavardhini B</TableCell>
          <TableCell sx={{ border: "1px solid black" }}>7376221CS159</TableCell>
          <TableCell sx={{ border: "1px solid black" }}>Member 1</TableCell>
          <TableCell sx={{ border: "1px solid black" }}>7376221xxxxx</TableCell>
          <TableCell sx={{ border: "1px solid black" }}>Member 2</TableCell>
          <TableCell sx={{ border: "1px solid black" }}>7376221xxxxx</TableCell>
          <TableCell sx={{ border: "1px solid black" }}>Project Selection website</TableCell>
          <TableCell sx={{ border: "1px solid black" }}>Pending</TableCell>
        </TableRow>
      </Table>
      <Box sx={{ textAlign: "right", margin: "10px" }}>
        <Button endIcon={<DownloadIcon />}>Download</Button>
      </Box>
    </div>
  )
}
