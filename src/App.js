import ProtectedLayout from './layout/ProtectedLayout';
import Dashboard from './modules/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <ProtectedLayout>
        <Dashboard />
      </ProtectedLayout>
    </div>
  );
}

export default App;
