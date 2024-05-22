import React from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<UserPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
