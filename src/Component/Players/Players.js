import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData/FakeData.json';
import Player from '../Player/Player';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import {  } from "./Players.css";
import { } from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Players = () => {
  

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(FakeData);
    })

    
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    const addPlayerHandler = (player) => {
        const newSelectedPlayer = [...selectedPlayer, player];
        setSelectedPlayer(newSelectedPlayer);
            
    }

  

    return (
            <div className="player-container">
                <div className="team-player">
                    { players.map(players => <Player player={players} addPlayerHandler={addPlayerHandler} key={players.id}></Player>)}
                </div>
                
                <div className="playing-player">
                    <SelectedPlayer selectedPlayer={selectedPlayer} ></SelectedPlayer>
                </div>    
            </div>
    );
};

export default Players;