import './App.css';
import {Route, Routes} from 'react-router-dom'
import ResponsiveAppBar from './components/menubar';
import  Home  from "./components/home";
import Packages from './components/packages';
import About from './components/about';
import { inject } from '@vercel/analytics';
inject();
function App() {
  return (
    <div className="App">
      <div className="App">
        <ResponsiveAppBar></ResponsiveAppBar>
      </div>
      <div>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/packages' Component={Packages}/>
        <Route path='/about' Component={About}/>

      </Routes>  
      </div>
    </div>
  );
}

export default App;
