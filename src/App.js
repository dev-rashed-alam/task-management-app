import ProtectedLayout from './layout/ProtectedLayout';
import Tables from './common/Tables';

function App() {
  return (
    <div className="App">
      <ProtectedLayout>
        <Tables />
      </ProtectedLayout>
    </div>
  );
}

export default App;
