import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// components
import Home from './components/Home'
import Register from './components/Authentication/Register'
import Login from './components/Authentication/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Project3407-Register' element={<Register />} />
        <Route exact path='/Project3407-Login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;