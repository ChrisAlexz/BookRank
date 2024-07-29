import { Dropdown } from 'react-bootstrap';
import "../src/index.css";
import '@fortawesome/fontawesome-free/css/all.css';
import bookrankImage from '../img/bookrank.png';
import axios from "axios";
import { useState } from 'react';

export function Navbar({ setBookData }) {
  const [search, setSearch] = useState("");

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCrzITp_QAFCeMDb-tumzAmf5M5rqthMmk`)
        .then(res => setBookData(res.data.items))
        .catch(err => console.log(err));
    }
  };

  return (
    <nav className="navbar navbar-light navbar-expand-sm bg-dark">
      <a href="#" className='navbar-brand mb-0'>
        <img 
          className='d-inline-block'
          src={bookrankImage}
          style={{ paddingTop: "1rem", marginRight: '0.5rem', marginLeft: '1.5rem', marginTop: '1rem' }}
          height="68"
          alt="BookRank"
        />
        <h1 className='text-white mx-2'>
          <span style={{ color: 'orange' }}>B</span>ook<span style={{ color: 'orange' }}>R</span>ank
        </h1>
      </a>
      <Dropdown className="ms-3 mx-5">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          <i className="fas fa-bars"></i> Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="input-group w-50">
        <input
          type="search"
          className="form-control"
          placeholder="Search BookRank"
          aria-label="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyPress={searchBook}
        />
        <button className="btn btn-outline-secondary" type="button">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="collapse d-flex align-items-center navbar-collapse justify-content-end p-5" id='navbar-nav'>
        <ul className='navbar-nav'>
          <li className="nav-item active">
            <a href='#' className='nav-link text-white mx-3' style={{ whiteSpace: 'nowrap' }}>
              BookRank<span style={{ color: 'red' }}>PRO</span>
            </a>
          </li>
          <li className="nav-item active">
            <a href='#' className='nav-link text-white mx-3'>
              <i className="fa-regular fa-bookmark"></i> Booklist
            </a>
          </li>
          <li className="nav-item active">
            <a href='#' className='nav-link text-white mx-3' style={{ whiteSpace: 'nowrap' }}>Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
