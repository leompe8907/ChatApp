import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SideBar from './components/SideBar';
import ChatArea from './components/ChatArea';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';



function App() {
  return (
    // <div className='chat-container'>
    //   <SideBar/>
    //   <ChatArea/>
    // </div>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
