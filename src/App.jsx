import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
