import React from 'react'
// import "./Navbar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand ml-4 font-weight-bold" to="/"><FontAwesomeIcon icon={faCoffee} color="#5228a7" /> YIE-Assesment</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ml-3 mr-3">
                                <NavLink className="nav-link" to="/">Pagination</NavLink>
                            </li>
                            <li className="nav-item ml-3 mr-3">
                                <NavLink className="nav-link" to="/load">Lazy_Load</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar