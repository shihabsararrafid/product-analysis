import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import Review from './Components/Reviews/Review';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>

    </div >
  );
}

export default App;
