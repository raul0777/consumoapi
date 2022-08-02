import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import Page404 from '../pages/error';
import Login from '../pages/log';

export default function Router() {
  toast.success('Oie, sucesso!');
  toast.error('Oie, error!');
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" component={Page404} />
    </Routes>
  );
}
