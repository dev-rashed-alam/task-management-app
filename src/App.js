import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Login from './modules/authentication/Login';
import Dashboard from './modules/dashboard/Dashboard';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './services/loginService';
import ProtectedLayout from './layout/ProtectedLayout';
import Task from './modules/task';
import MemberList from './modules/members';

const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route element={<ProtectedLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="tasks" element={<Task />} />
              <Route path="members" element={<MemberList />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
