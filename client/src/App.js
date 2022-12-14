import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Auth, ProtectedRoute } from './pages';
import {
  AddJob,
  AllJobs,
  Stats,
  Profile,
  SharedLayout,
  Overview,
  Support
} from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="stats" element={<Stats />} />
          <Route path="profile" element={<Profile />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="/" element={<Auth />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
