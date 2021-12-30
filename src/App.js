import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import user from './config/api/user';
import { setAuthorizationHeader } from './config/axios';
import Authenticated from './middleware/Authenticated';
import NotFound from './pages/404';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import { setProfile } from './redux/actions/user';

function App() {
  let navigate = useNavigate();
  let session = JSON.parse(localStorage.getItem('session'));
  let query = useQuery().get('tkey');
  const dispatch = useDispatch();

  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const validasiUser = (token) => {
    setAuthorizationHeader(token);
    user
      .detailUser()
      .then((res) => {
        localStorage.setItem('session', JSON.stringify(token));
        dispatch(setProfile(res.data.data));
        navigate('/');
      })
      .catch((err) => {
        console.log('error', err.response);
      });
  };

  useEffect(() => {
    if (query || session) {
      validasiUser(query || session);
    } else {
      window.location.href = 'http://apps.pins.co.id/';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/dashboard" element={<Dashboard />}></Route>
      <Route exact path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
