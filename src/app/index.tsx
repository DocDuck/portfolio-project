import { Suspense, lazy, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import cn from "classnames";
import { useTheme } from '../theme/useTheme';
import "../styles/index.scss"
import s from "./styles.module.scss"

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));

const App = () => {

  const { onToggleTheme, theme } = useTheme()

  return (
    <div className={cn(s.app, theme)}>
      <div className={s.links}>
        <button onClick={onToggleTheme}>{ theme }</button>
        <Link to="/">to Home</Link>
        <Link to="/about">to About</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  )
};

App.displayName = "App"

export default App;