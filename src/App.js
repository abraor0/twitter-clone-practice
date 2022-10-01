import { Navigate, Route, Routes } from 'react-router-dom';
import LoginCard from './components/Login/LoginCard';
import Layout from './components/UI/Layout';
import UnauthedHome from './routes/unauthedHome';
import { useAuthContext } from './store/auth-context';

const App = () => {
  const { isLoggedIn } = useAuthContext();

  console.log(isLoggedIn);
  return (
    <div className="text-black">
      <Routes>
        <Route>
          {isLoggedIn && <Route path="/" element={<Layout />} />}
          {!isLoggedIn && (
            <>
              <Route path="/" element={<UnauthedHome />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
          <Route path="login" element={<LoginCard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
