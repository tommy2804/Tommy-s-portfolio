import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Preloader from '../src/components/preLoad';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Project from './pages/Projects';
import { useMouse } from './hooks/use-mouse';

function App() {
  const [load, upadateLoad] = useState(true);
  const ref = useRef(null);
  const { x, y } = useMouse(ref);

  const variants = {
    default: {
      x,
      y,
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" ref={ref}>
      <motion.div className="cursor" variants={variants} animate="default" />
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? 'no-scroll' : 'scroll'}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/project" element={<Project />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
