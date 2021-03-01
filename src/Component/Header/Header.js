import React from 'react';
import {  } from "./Header.css";
import { } from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
    return (
        <div className="container-header">
        <section className="container">
            <nav id="navbar" class="navbar fixed-top text-center navbar-expand-md navbar-dark ">
                <div className="container">
                    <a className="nav-link active px-3  text-dark" href="#">
                    <h2>Fantasy Football</h2>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto  mb-lg-0 nav justify-content-end">
                        <li className="nav-item pt-2">
                            <span>
                                <a className="nav-link active px-3  text-dark"  href="#">
                                <h6>Team</h6>
                                </a>
                            </span>
                        </li>
                        <li className="nav-item pt-2">
                            <span>
                                <a className="nav-link active px-3  text-dark"  href="#">
                                <h6>Tickets</h6>
                                </a>
                            </span>
                        </li>
                        <li className="nav-item pt-2">
                            <span>
                                <a className="nav-link active px-3  text-dark"  href="#">
                                <h6>Player</h6>
                                </a>
                            </span>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </section>
</div>
    );
};

export default Header;