import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Registre from './components/Registre';
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element= { <Home/> }/>
        <Route path='/register' element= { <Registre/> }/>
        <Route path='/' element= { <Login/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
