import React from 'react'
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home   from './components/Home'
import Cart from './components/Cart'
// import Reducer from './context/Reducer'

function App() {
  return (
    <div>
    <Header />
    
    <Routes>
      <Route path ='/' element={<Home />}></Route>
      <Route path ='cart' element={<Cart  />} ></Route>
    </Routes>
     
    
   
    </div>
  ) 
}

export default App;
