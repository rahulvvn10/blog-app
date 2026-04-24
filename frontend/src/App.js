import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PostList from './pages/postlist';
import PostDetails from './pages/postdetails';
import Header from './components/header';
import Footer from './components/footer';
import CategoryPost from './pages/categorypost';
function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<PostList/>}/>
        <Route path='/posts/:id' element={<PostDetails/>}/>
        <Route path='/posts/category/:id' element={<CategoryPost/>}/>
      </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
