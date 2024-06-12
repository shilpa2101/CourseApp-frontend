import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import View from './components/View';
import Search from './components/Search';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddCourse/>}/>
    <Route path='/view' element={<View/>}/>
    <Route path='/search' element={<Search/>}/>
    </Routes></BrowserRouter>
  );
}

export default App;
