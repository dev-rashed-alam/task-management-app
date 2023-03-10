import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Login from './modules/authentication/Login';
import Dashboard from './modules/dashboard/Dashboard';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './services/loginService';
import ProtectedLayout from './layout/ProtectedLayout';
import Task from './modules/task';
import MemberList from './modules/members';
import MemberForm from './modules/members/MemberForm';
import TaskForm from './modules/task/TaskForm';
import PageNotFound from './common/PageNotFound';
import LoaderComponent from './common/LoaderComponent';
import { useLoader } from './redux/loader/loaderSlice';

/**
 * validate the route request as authenticated or not
 *
 * @function
 * @returns {JSX.Element}
 */
const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

/**
 * Defines the routing configuration for the application.
 *
 * @component
 * @returns {JSX.Element}
 */

const App = () => {
  const loader = useLoader();

  return (
    <div className="App">
      <LoaderComponent isLoading={loader}>
        <Router>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<ProtectedRoutes />}>
              <Route element={<ProtectedLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="members" element={<MemberList />} />
                <Route path="members/new" element={<MemberForm />} />
                <Route path="member/:id" element={<MemberForm />} />
                <Route path="tasks" element={<Task />} />
                <Route path="tasks/new" element={<TaskForm />} />
                <Route path="tasks/:id" element={<TaskForm />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Router>
        <Toaster position="top-right" reverseOrder={false} />
      </LoaderComponent>
    </div>
  );
};

export default App;
