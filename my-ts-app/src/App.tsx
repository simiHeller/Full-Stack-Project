import React,{useEffect} from 'react';
import './App.css';
import MenuAppBar from './component/navbars/Navbar';
import Routing from './component/Routing';

function App() {
  
  return (
    <div className="App">  

    <MenuAppBar></MenuAppBar>
    <Routing></Routing>

    </div>
  );
}

export default App;
