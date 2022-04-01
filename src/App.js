import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/*<Route path='/profile' element=/>*/}
        <Route path='/home' element={<Home/>}/>
      </Routes>
  );
}

export default App;
