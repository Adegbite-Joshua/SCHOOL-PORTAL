import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
        <nav style={{position: 'fixed', top: '0', width: '100vw', zIndex: '9999999999999'}} className="navbar navbar-expand-lg px-5">
        <div className="container-fluid">
            <Link className="navbar-brand h4" to='#'>School</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"></Link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sign Up
                    </a>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item">Staff</Link></li>
                        <li><Link class="dropdown-item"  to='/signup'>Student</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='http://localhost:5173'>Staff Portal</Link>
                </li>
                {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to='#'>Action</Link></li>
                    <li><Link className="dropdown-item" to='#'>Another action</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to='#'>Something else here</Link></li>
                </ul>
                </li> */}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sign In
                    </a>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" href="#">Staff</Link></li>
                        <li><Link class="dropdown-item" to='/signin' href="#">Student</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='#'>Contact Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='#'>About Us</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search from our school resources" aria-label="Search" />
                <button className="btn btn-outline-success d-flex justify-content-center align-items-center" type="submit">Search <i className='fas fa-search'></i></button>
            </form>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar