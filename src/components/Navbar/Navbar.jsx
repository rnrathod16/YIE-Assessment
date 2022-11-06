import React from 'react'
// import "./Navbar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand ml-4 font-weight-bold" href="/"><FontAwesomeIcon icon={faCoffee} color="#5228a7" /> YIE-Assesment</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ml-3 mr-3">
                                <a className="nav-link" href="/">Pagination</a>
                            </li>
                            <li className="nav-item ml-3 mr-3">
                                <a className="nav-link" href="/">Lazy_Load</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar