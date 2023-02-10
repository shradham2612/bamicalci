import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Mainpage, Button } from "./components";

const Browse = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Button />} />
          <Route path="/calculate" element={<Mainpage />} />
          <Route path="/result" element={<div>Result</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Browse;
