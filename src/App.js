import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404';
import Dashboard from './pages/Dashboard';

import Home from './pages/Home';
import Login from './pages/Login';
import { setValidationUser } from './redux/actions/user';

function App() {
  const USER = useSelector((state) => state.user);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let session = JSON.parse(localStorage.getItem('session'));
  let query = useQuery().get('tkey');

  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  useEffect(() => {
    if (query || session) {
      dispatch(setValidationUser(query ?? session));
    } else {
      window.location.href = 'http://apps.pins.co.id/module';
    }

    USER.isValidation
      ? navigate('/dashboard')
      : (window.location.href = 'http://apps.pins.co.id/module');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
