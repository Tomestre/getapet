import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/*components */


/* pages */
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Home from './components/pages/Home';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


function App() {
  return (

    
    <BrowserRouter>
    <Navbar/>
    <Routes>
        
        <Route path='/login' element={<Login/>}/>
          
        <Route path='/register' element={<Register/>}/>
      
        <Route path='/' element={<Home/>}/>
              
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
