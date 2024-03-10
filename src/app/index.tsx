import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import s from "./styles.module.scss"

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));

const App = () => (
  <Router>
    <div className={s.links}>
      <Link to="/">to Main</Link>
      <Link to="/about">to About</Link>
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);

App.displayName = "App"

export default App;