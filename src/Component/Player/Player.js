import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {  } from "./Player.css";
import { } from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Player = (props) => {
   
    const addPlayerHandler = props.addPlayerHandler;
    const {image, flag, name, jersey, position, age, salary, country, team, logo} = props.player;

    
    const [btnDisable, setBtnDisable] = useState(false);
    function addMe() {
        setBtnDisable(true);
    }

  
  
    return (
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                <div className="card custom-rounded shadow-sm">
                    <div className="card-image">
                        <img src={image} alt="player" className="card-img-top"/>
                    </div>
                    <div className="card-body">
                        <h2 className="h5">{name}</h2>
                        <ul className="list-group list-group-flush my-3 player-info-list">
                            <li className="list-group-item">
                                <strong>Age :</strong> 
                                <span>{age}</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Jersey No:</strong> 
                                <span>{jersey}</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Position :</strong>
                                <span>{position}</span>
                            </li>
                            <li className="list-group-item card-logo">
                                <strong>Club :</strong> 
                                <span> <img src={logo} alt="icon" data-toggle="tooltip" data-placement="top" title={team}/></span>
                            </li>
                            <li className="list-group-item card-logo">
                                <strong>Country : </strong>
                                <span><img src={flag} alt="flag" data-toggle="tooltip" data-placement="top" title={country} /></span>
                            </li>
                        
                        </ul>
                        <h5 className="d-flex justify-content-between salary">
                            <span>Salary : </span>
                            <span className="total-salary">£{salary}</span>
                        </h5>
                    </div>
                    <div className="card-footer text-center">
                        <button type="submit" onClick={() => addPlayerHandler(props.player) & addMe()} disabled={btnDisable} className="btn select-btn"  id="add-button"><FontAwesomeIcon icon={faUser}/>  Select this player</button>
                    </div>
                </div>
            </div>
    );
};

export default Player;