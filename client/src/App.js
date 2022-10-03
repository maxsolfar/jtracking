import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Landing, Auth, ProtectedRoute } from './pages';
import {
  AddJob,
  AllJobs,
  Stats,
  Profile,
  SharedLayout,
} from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
