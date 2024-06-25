import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Avatar, Tooltip, MenuItem, Menu } from '@mui/material';
import img from '../images/profile.png';

function Appbar({ studentDetails }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleStudentDashboard = () => {
    // Navigate to the student dashboard
    window.location.href = '/student-dashboard'; // Example: Redirect to the student dashboard
  };

  const handleLogout = () => {
    // Clear any authentication tokens or session information
    localStorage.removeItem('accessToken'); // Example: Remove access token from local storage

    // Redirect to the login page
    window.location.href = '/'; // Example: Redirect to the login page
  };

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            marginRight: 2,
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          PROJECT TITLE PORTAL
        </Typography>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 ,marginRight: 3}}>
              <Avatar alt="Profile" src={img} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleStudentDashboard}>
              <Typography textAlign="center" style={{ fontFamily: 'cursive' }}>Student Dashboard</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center" style={{ fontFamily: 'cursive' }}>Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
