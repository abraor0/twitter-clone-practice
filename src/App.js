import { Navigate, Route, Routes } from 'react-router-dom';
import LoginCard from './components/Login/LoginCard';
import Layout from './components/UI/Layout';
import NotificationContainer from './components/Notification/NotificationContainer';
import UnauthedHome from './routes/unauthedHome';
import { useAuthContext } from './store/auth-context';
import Home from './routes/home';
import NotFound from './routes/notfound';

const App = () => {
  const { isLoggedIn } = useAuthContext();
  
  return (
    <div className="text-black">
      <Routes>
        <Route>
          {isLoggedIn && (
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          )}
          {!isLoggedIn && (
            <>
              <Route path="/" element={<UnauthedHome />}>
                <Route path="login" element={<LoginCard />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
          <Route path="twitter-clone-practice" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <NotificationContainer />
    </div>
  );
};

export default App;
