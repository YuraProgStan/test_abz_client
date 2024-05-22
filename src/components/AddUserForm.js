import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { apiUrls, baseURL } from '../configs';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionId, setPositionId] = useState('');
  const [token, setToken] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('position_id', positionId);
    if (photo) {
      formData.append('photo', photo);
    }

    try {
      const response = await fetch(`${baseURL}${apiUrls.users}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Error adding user');
      }
      setName('');
      setEmail('');
      setPhone('');
      setPositionId('');
      setToken('');
      setPhoto(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
      <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth margin="normal" />
      <TextField label="Position ID" value={positionId} onChange={(e) => setPositionId(e.target.value)} fullWidth margin="normal" />
      <TextField label="Token" type="password" value={token} onChange={(e) => setToken(e.target.value)} fullWidth margin="normal" />
      <input type="file" onChange={handleFileChange} />
      <Button type="submit" variant="contained" color="primary">
                Add User
      </Button>
    </Box>
  );
};

export default AddUserForm;
