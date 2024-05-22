import { useParams } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { apiUrls, baseURL } from '../configs';

const UserPage = () => {
  let { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async (url = `${baseURL}${apiUrls.users}/${id}`) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setUser(data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      {loading && <CircularProgress />}
      {!loading && user && (
        <Card>
          <CardContent>
            <Avatar src={user.photo} alt={user.name} sx={{ width: 75, height: 75 }} />
            <Typography variant="h5">{user.name}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone: {user.phone}</Typography>
            <Typography>Position: {user.position}</Typography>
            <Typography>Position ID: {user.position_id}</Typography>
            <Typography>Registration Timestamp: {user.registration_timestamp}</Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default UserPage;
