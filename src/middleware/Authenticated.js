import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import user from '../config/api/user';
import { setAuthorizationHeader } from '../config/axios';
import { setProfile } from '../redux/actions/user';

export default function Authenticated({ children }) {
  const ok = JSON.parse(localStorage.getItem('session'));
  console.log(ok);

  // if (ok) {
  //   // Redirect them to the /login page, but save the current location they were
  //   // trying to go to when they were redirected. This allows us to send them
  //   // along to that page after they login, which is a nicer user experience
  //   // than dropping them off on the home page.
  //   return <Navigate to="/dashboard" />;
  // } else {
  //   window.location.href = 'http://apps.pins.co.id/';
  // }

  return children;
}
