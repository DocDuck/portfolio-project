import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { About } from "../pages/about";
import { Main } from "../pages/main";
import s from "./styles.module.scss"

export const App: React.FC = () => {

  return (
    <div className={s.app}>
      <BrowserRouter>
        <div className={s.links}>
          <Link to="/">to Main</Link>
          <Link to="/about">to About</Link>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

App.displayName = "App"