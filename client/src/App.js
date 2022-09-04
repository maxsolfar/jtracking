import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Error, Dashboard, Landing, Auth } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/" element={<Landing />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
