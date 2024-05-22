import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import classes from './UserItem.module.css';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <ListItem key={user.id}>
      <ListItemAvatar>
        <Avatar src={user.photo} alt={user.name} />
      </ListItemAvatar>
      <ListItemText
        primary={user.name}
        secondary={
          <span className={classes.user_item}>
            <span>Email: {user.email}</span>
            <span>Phone: {user.phone}</span>
            <span>Position: {user.position}</span>
            <span>Position ID: {user.position_id}</span>
            <span>Registration Timestamp: {user.registration_timestamp}</span>
            <span><Link to={`/${user.id}`}>info page</Link>
            </span></span>
        }
      />
    </ListItem>
  );
};

export default UserItem;
