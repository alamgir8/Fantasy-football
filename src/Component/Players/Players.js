import React, { useEffect, useState } from 'react';
import PlayerData from '../../PlayerData/PlayerData.json';
import Player from '../Player/Player';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import {  } from "./Players.css";
import { } from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Players = () => {
  

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(PlayerData);
        
    }, []);

    
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    const addPlayerHandler = (player) => {
        const newSelectedPlayer = [...selectedPlayer, player];
        setSelectedPlayer(newSelectedPlayer);
            
    }   
    
  

    return (
            <div className="row">
                <div className="col-12 col-md-9 col-lg-9">
                    <div className="row">
                        { players.map(player => <Player player={player} addPlayerHandler={addPlayerHandler} key={player.code}> </Player>)}
                       
                    </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="playing-player top-fixed">
                        <SelectedPlayer selectedPlayer = {selectedPlayer}></SelectedPlayer>
                    </div>    
                </div>             
            </div>
    );
};

export default Players;