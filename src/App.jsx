import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./style";

import { Mainpage, Button } from "./components";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-pink-200 to-indigo-600">
      <div className={`${styles.paddingX}${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Button />} />
              <Route path="/calculate" element={<Mainpage />} />
              <Route path="/result" element={<div>Result</div>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
