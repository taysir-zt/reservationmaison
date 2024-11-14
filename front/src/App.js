import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registre from './components/Registre';
import Login from './components/Login';
import Home from './components/Home';
import Navbare from './components/Navbar'; 



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/Navbar' element= { <Navbare/> }/>
        <Route path='/home' element= { <Home/> }/>
        <Route path='/register' element= { <Registre/> }/>
        <Route path='/' element= { <Login/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
