import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Button, List, CircularProgress } from '@mui/material';
import UserItem from './UserItem';
import { apiUrls, baseURL } from '../configs';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState(null);
  const currentUrl = useRef(null);

  const fetchUsers = useCallback(async (url = `${baseURL}${apiUrls.users}?page=1&count=6`) => {
    if (currentUrl.current !== url) {
      currentUrl.current = url;
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.success) {
          setUsers(prevUsers => [...prevUsers, ...data.users]);
          setNextUrl(data.links.next_url);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
      setLoading(false);
    }
  },[]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleShowMore = () => {
    if (nextUrl) {
      fetchUsers(nextUrl);
    }
  };

  return (
    <>
      <List>
        {users.map(user => <UserItem key={user.id} user={user} />)}
      </List>
      {loading && <CircularProgress/>}
      {nextUrl && !loading && (
        <Button variant="contained" onClick={handleShowMore}>
                    Show more
        </Button>
      )}
    </>
  );
};

export default UserList;
