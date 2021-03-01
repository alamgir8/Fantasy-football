import React from 'react';
import {  } from "./Header.css";
import { } from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
    return (
        <div className="container-header">
        <section className="container">
            <nav id="navbar" className="navbar text-center navbar-expand-md navbar-dark ">
                <div className="container">
                    <li className="nav-link active px-3  text-dark" >
                    <h2>Fantasy Football</h2>
                    </li>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto  mb-lg-0 nav justify-content-end">
                        <li className="nav-item pt-2">                             
                            <h6>Team</h6>
                        </li>
                        <li className="nav-item pt-2">
                            <h6>Tickets</h6>
                        </li>
                        <li className="nav-item pt-2">
                                <h6>Player</h6>
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