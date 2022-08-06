import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Dashboard from './Dashboard';

import Helmet from 'react-helmet';

import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';

import Logo from '../resources/logo.svg';
import { useHistory, useLocation } from 'react-router';

const drawerWidth = 240;

function DashboardLayout(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [organization, setOrganization] = useState([]);

  const location = useLocation();
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    // ApiServices.getOrganizationById(1).then((response) => {
    //   setOrganization(response.data);
    // });
    // NOTE: This needs to be changed at some point. It is default data
    setOrganization({
      id: 1,
      name: 'StrongBuilt'
    });
  }, []);

  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location.pathname]);

  function MenuItem(props) {
    if (location.pathname === "/") {
      return (
        <IconButton
          onClick={() => history.push('/newTeam')}
        >
          <AddCircleIcon sx={{ width: 32, height: 32, color: "white" }} />
        </IconButton>
      )
    }
    if (location.pathname.includes('/teams/')) {
      return (
        <IconButton
          onClick={() => history.push('/editTeam')}
        >
          <EditIcon sx={{ width: 28, height: 28, color: "white" }} />
          {/* <MoreVertIcon sx={{ width: 28, height: 28, color: "white" }} /> */}
        </IconButton>
      )
    }
    if (location.pathname === "/employees") {
      return (
        <IconButton
          onClick={() => history.push("/newEmployee")}
        >
          <AddCircleIcon sx={{ width: 32, height: 32, color: "white" }} />
        </IconButton>
      )
    }
    if (location.pathname.includes('/employees/')) {
      return (
        <IconButton
          onClick={() => history.push(`/editEmployee/${location.pathname.substring(location.pathname.lastIndexOf("/") + 1)}`)}
        >
          <EditIcon sx={{ width: 28, height: 28, color: "white" }} />
          {/* <MoreVertIcon sx={{ width: 28, height: 28, color: "white" }} /> */}
        </IconButton>
      )
    }
    return null
  }

  const drawer = (
    <div>
      {/* TODO: Remove this "Toolbar" componenet and replace it with the app title on large
                      screen sizes. */}
      <Toolbar>
        Administrator
        {/* 
        Teamly Logo
      */}
        {/* <img src={Logo} alt='Teamly Logo' className='logo' width='32' height='32' style={{ marginRight: '1.5rem' }} /> */}
      </Toolbar>

      <Divider />
      <List>
        <ListItemButton key={"Teams"} onClick={() => history.push("/")}>
          <ListItemIcon sx={{ minWidth: '32px' }}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </ListItemIcon>
          <ListItemText primary={"Teams"} />
        </ListItemButton>
        <ListItemButton key={"Employees"} onClick={() => history.push("/employees")}>
          <ListItemIcon sx={{ minWidth: '32px' }}>
            <svg width='20' height='20' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </ListItemIcon>
          <ListItemText primary={"Employees"} />
        </ListItemButton>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Helmet>
        {/* Dynamically set the page title */}
        <title>{organization.name !== undefined ? `${organization.name} - Teamly` : "Teamly"}</title>
      </Helmet>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* 
                      Teamly Logo
                    */}
          <img src={Logo} alt='Teamly Logo' className='logo' width='32' height='32' style={{ marginRight: '1.25rem' }} />

          {/*
                      Appbar title
                    */}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: "medium" }}>
            { organization.name !== undefined ? organization.name : "Teamly"}
          </Typography>
          <MenuItem />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#F2F2F2" },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#F2F2F2" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Dashboard />
    </Box>
  );
}

export default DashboardLayout;