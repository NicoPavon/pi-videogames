import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import GameDetail from './components/GameDetail/GameDetail';
import Page404 from './components/error404/error404';
import NewGame from './components/NewGame/NewGame';
import About from './components/About/About.jsx';



function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<LandingPage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path= 'home/:id' element={<GameDetail/>}/>
    <Route path= '*' element ={<Page404/>}/>
    <Route path= '/create' element= {<NewGame/>}/>
    <Route path= '/updategame/:id' element= {<NewGame/>}/>
    <Route path= '/about' element={<About/>}/>

    </Routes>
   </BrowserRouter>
  );
}

export default App;
