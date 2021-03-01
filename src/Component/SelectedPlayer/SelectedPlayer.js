import React from 'react';
import { } from "./SelectedPlayer.css"
import { } from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const SelectedPlayer = (props) => {
   
    let selectedPlayer = props.selectedPlayer;

    let totalSalary = 0;
    let salary = 0;
    for (let i = 0; i < selectedPlayer.length; i++) {
        const player = selectedPlayer[i];
        totalSalary += player.salary;
        salary = player.salary
    }

    if (selectedPlayer.length > 11 ) {
        selectedPlayer.length = 11;
        alert('playing lineup complete as you selected eleven player')

       
    }

  
    return (
        <div className="selected-player-container">
            <div className="total-player">
                <h5>Total Selected Player : {selectedPlayer.length}</h5>
                <h5 className="text-center">Player List </h5>
            </div>
            <div className="selected-player">
                <p>
                <ol className="text-justify">
                        {
                            selectedPlayer.map(player => <li>{player.name} : £{player.salary}</li>)
                        }
                    </ol>
                </p>               
            </div>
            <div className="total-salary">
                <h5>Total Salary : £{totalSalary}</h5>
            </div>
            
        </div>
    );
};

export default SelectedPlayer;