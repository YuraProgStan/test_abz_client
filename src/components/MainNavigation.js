import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material';

function MainNavigation() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'common.white' }}>
                    Yuriy User Management
        </Typography>
        <List component="nav" sx={{ display: 'flex' }}>
          <ListItem button component={Link} to="/" sx={{ textDecoration: 'none', color: 'common.white' }}>
            <ListItemText primary="User List" />
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default MainNavigation;
