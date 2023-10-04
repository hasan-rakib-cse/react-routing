import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Search from './components/Search/Search';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/courses'>Courses</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} >
            <Route path='search' element={<Search />} />
            <Route path='list' element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;