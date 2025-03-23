import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './component/Navbar';
import Register from './pages/Register';
import Login from './pages/Login'; 
import AppProduct from './AppProduct';
import Home from './pages/Home';

function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Home"element={<Home/>}/>
        <Route path="/Login"element={<Login/>}/>
        <Route path="/register"element={<Register/>}/>
        <Route path="/add-product"element={<AppProduct/>}/>

      </Routes>
      </Router>

  );
}

export default App;
