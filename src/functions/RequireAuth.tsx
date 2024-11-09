import Cookie from 'cookie-universal';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const cookie = Cookie();
  const kalb = cookie.get('kalb');

  return kalb ? <Outlet /> : <Navigate to={'/profile'} replace={true} />;
};

export default RequireAuth;
