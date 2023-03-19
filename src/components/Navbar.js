import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"

export default class Navbar extends Component {

    // this is the NavBar page Where i used Bootstrap to build the frame and using router concepts to link the perticular pages.
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-dark py-3 fw-bold fixed-top opacity-75 ">
                    <div className="container-fluid ">
                        <Link className="navbar-brand text-light " to="/" >News2U</Link>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/">General</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/science">Science</Link> </li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/sports">Sports</Link> </li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/technology">Technology</Link> </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
