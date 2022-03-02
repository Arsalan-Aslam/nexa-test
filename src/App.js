import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import ResetPass from "./components/ResetPass";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/reset' element={<ResetPass />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
