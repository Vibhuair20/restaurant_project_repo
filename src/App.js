import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import BookTable from './pages/BookTable/BookTable.jsx';
import Main from './pages/main.jsx'
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route exact path="/booktable" element={<BookTable />} />
    </Routes>
  </BrowserRouter>
);

export default App;
