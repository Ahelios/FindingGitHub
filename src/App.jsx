import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <div className="container mx-auto px-3 pb-12">
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/notFound' element={<NotFound/>}/>
              <Route path='/*' element={<NotFound/>}/>
            </Routes>
          </main>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
