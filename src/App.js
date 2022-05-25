import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Homepage from './routes/Homepage/Homepage';
import Login from './routes/Login/Login';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
