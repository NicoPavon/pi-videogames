import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path= '/' element= {<LandingPage/>}/>
    <Route path= '/Home' element= {<Home/>}/>

    </Routes>
   </BrowserRouter>
  );
}

export default App;
