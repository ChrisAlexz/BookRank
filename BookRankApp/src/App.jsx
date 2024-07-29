
import './index.css';
import { Navbar } from '../components/Navbar';
import Card from '../components/Card';
import React, { useState } from 'react';

export default function App() {
  const [bookData, setBookData] = useState([]);

  return (
    <>
      <Navbar setBookData={setBookData} />
      <h1 className='dev  ms-5 p-5 pb-2'>Dev Top 5</h1>
      <div className="container ms-5">
        <div className="d-flex justify-content-start ms-3 mt-3">
          <Card book={bookData} />
        </div>
        <h1 className='dev'>Top Rated</h1>
      </div>
    </>
  );
}
