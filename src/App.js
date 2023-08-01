import './App.css';
import {Route, Routes} from 'react-router-dom'
// import ResponsiveAppBar from './components/menubar';
import  Home  from "./components/home";
import Packages from './components/packages';
import Apackages from './components/apackages.js';
import About from './components/about';
import Aabout from './components/aabout';
import { inject } from '@vercel/analytics';
import Ahome from './components/ahome.js';
import Empty from "./components/Empty.js";
import Aempty from "./components/aempty.js";
inject();
function App() {
  return (
    <div className="App">
      <div className="App">
        {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      </div>
      <div>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/ar' Component={Ahome}/>
        <Route path='/packages' Component={Packages}/>
        <Route path='/ar/packages' Component={Apackages}/>
        <Route path='/about' Component={About}/>
        <Route path='/ar/about' Component={Aabout}/>
        <Route path='/empty' Component={Empty}/>
        <Route path='/ar/empty' Component={Aempty}/>

      </Routes>  
      </div>
    </div>
  );
}

export default App;
