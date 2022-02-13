import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NewPost from './components/pages/NewPost';
import PostPage from './components/pages/PostPage';
import EditPage from './components/pages/EditPage';
import Missing from './components/pages/Missing';
import { DataProvider } from './components/context/DataContext';




function App() {


  return (
    <div className="App">
      <Header title="POSTS"/> 
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/post" element={ <NewPost /> } />
          <Route path="/post/:id" element={ <PostPage /> } />
          <Route path="/post/edit/:id" element={ <EditPage /> } />
          <Route path="*" element={ <Missing /> } />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;