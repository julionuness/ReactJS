import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import Main from "./components/main";

{/* ------------------------------------------------------------------- */}
{/* the following code is all about the app bar, except the drawer */}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

{/* ------------------------------------------------------------------- */}


function App() {
{/* ------------------------------------------------------------------- */}
{/* the following code is about the drawer */}
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
          <ListItem key='Dashboard' disablePadding>
            <ListItemButton href="/">
              <ListItemIcon>
                <EmojiSymbolsIcon />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItemButton>
          </ListItem>
          
          <ListItem key='Charts' disablePadding >
            <ListItemButton href="/charts">
              <ListItemIcon>
                <SsidChartIcon />
              </ListItemIcon>
              <ListItemText primary='Charts' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Calendars' disablePadding>
            <ListItemButton href="/calendars">
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary='Calendars' />
            </ListItemButton>
          </ListItem>

      </List>
    </Box>
  );

{/* ------------------------------------------------------------------- */}
{/* about the rest of the app bar */}
const [anchorEl, setAnchorEl] = React.useState(null);
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

const isMenuOpen = Boolean(anchorEl);
const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

const handleProfileMenuOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMobileMenuClose = () => {
  setMobileMoreAnchorEl(null);
};

const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
};

const handleMobileMenuOpen = (event) => {
  setMobileMoreAnchorEl(event.currentTarget);
};

const menuId = 'primary-search-account-menu';
const renderMenu = (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={menuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  </Menu>
);

const mobileMenuId = 'primary-search-account-menu-mobile';
const renderMobileMenu = (
  <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
);

{/* ------------------------------------------------------------------- */}

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: "100%" },
          ml: { sm: "0px" },
        }}
      >
        <Toolbar>
{/* ------------------------------------------------------------------- */}
        <IconButton 
          edge="start"
          aria-label="open drawer"
          size="large" 
          color="inherit" 
          onClick={toggleDrawer(true)}
          >
            <MenuIcon fontSize="inherit"/>
        </IconButton>
        
        <Drawer
          anchor={'left'}
          open={state}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>

{/* ------------------------------------------------------------------- */}
          <Typography variant="h6" noWrap component="div">
            Company Name
          </Typography>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      
      {renderMobileMenu}
      {renderMenu}

{/* --------------------------------------------------------------------------------- */}

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 5, width: { sm: "100%" } }}
      >
      <div className="page-content" />
      <Main/>

      </Box>
    </Box>
    </div>
  );
}

export default App;
