import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
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
        <div className="player-details">
            <div className="player-image text-center">
                 <img src={image} alt=""/>
                 <h4>{name}</h4>
                 <h5>Weekly Salary : £{salary}</h5>
            </div>
            <div className="player-info">
                <ul >
                    <li>
                        Age : {age}
                    </li>
                    <li>
                        Jersey No: {jersey}
                    </li>
                    <li>
                        Position : {position}
                    </li>
                    <li>
                        Club : <img src={logo} alt=""/> {team}
                    </li>
                    <li>
                        Country : <img src={flag} alt=""/> {country}
                    </li>
                   
                </ul>
            </div>
                <div className="text-center">
                    <button type="submit" onClick={() => addPlayerHandler(props.player) & addMe()} disabled={btnDisable} className="btn btn-primary"  id="add-button"><FontAwesomeIcon icon={faCheck} /> Select This Player</button>
                </div>
        </div>
    );
};

export default Player;