import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signip';
import AddShow from './components/AddShow';
import { useState } from 'react';

function App() {
  const [shows, setShows] = useState();
  const [user, setUser] = useState();
  return (
    <>
    {/* <ul>
      <li> <Link to="/addshow"></Link></li>
    </ul> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home shows={shows} setShows={setShows}/>} />
          <Route path="/signup" element={<Signup setUser={setUser}/>}/>
          <Route path="/login" element={<Login setUser= {setUser}/>} />
          <Route path="/addshow" element={<AddShow setShows={setShows} />} />
        </Routes>
      </BrowserRouter>
    </>
      
  );
}

export default App;
