import { Container, Typography } from '@mui/material';
import AddUserForm from '../components/AddUserForm';
import UserList from '../components/UserList';
import React from 'react';

const MainPage = () => {
  return (
    <Container sx={{ marginBottom: 4 }}>
      <Typography variant="h5" component="h1" gutterBottom sx={{ mt: 2 }}>
            User List
      </Typography>
      <AddUserForm />
      <UserList />
    </Container>
  );
};

export default MainPage;
