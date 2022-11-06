import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Filter from './components/Filters/Filter';
import Lazyload from './components/Lazyload/Lazyload';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Filter />}></Route>
        <Route exact path="/load" element={<Lazyload />}></Route>
      </Routes>
    </>
  );
}

export default App;
