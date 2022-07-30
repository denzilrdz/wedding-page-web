import PropTypes from 'prop-types';
import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { State } from '../../interface/state';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Colors from '../../styles/color.module.scss';

const propTypes = {
  name: PropTypes.string,
};

const defaultProps = {
  name: '',
};

const drawerWidth = 240;

const navItems = [
  {
    key: 'home',
    title: 'Home',
    route: function () {
      return `/`;
    },
  },
  {
    key: 'our-services',
    title: 'Our Services',
    route: function () {
      return `/${this.key}`;
    },
  },
  {
    key: 'love-stories',
    title: 'Love Stories',
    route: function () {
      return `/${this.key}`;
    },
  },
  {
    key: 'about',
    title: 'About',
    route: function () {
      return `/${this.key}`;
    },
  },
];

const headerStyles = {
  '&.MuiAppBar-root': {
    backgroundColor: `${Colors.primaryColor}`,
  },
};

export const Header: FC = (props: any) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const history = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleRouteChange = (route: any) => {
    history(route);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        The Wedding Page
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => handleRouteChange(item.route())}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav' sx={headerStyles}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            The Wedding Page
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => handleRouteChange(item.route())}
                key={item.key}
                sx={{ color: '#fff' }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

const mapStateToProps = (state: State) => ({
  name: state.header.name,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
