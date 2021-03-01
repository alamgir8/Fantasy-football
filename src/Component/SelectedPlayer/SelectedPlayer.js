import React from 'react';
import { } from "./SelectedPlayer.css"
import { } from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const SelectedPlayer = (props) => {
   
    let selectedPlayer = props.selectedPlayer;
   

    let totalSalary = 0;
    for (let i = 0; i < selectedPlayer.length; i++) {
        const player = selectedPlayer[i];
        totalSalary = totalSalary + player.salary;
       
    }

    if (selectedPlayer.length > 11 ) {
        selectedPlayer.length = 11;
        alert('playing lineup complete as you selected eleven player')

       
    }

  
    return (
        <div className="card custom-rounded">
            <div className="card-header bg-custom-info ">
                <h5 className="mb-0 text-white">Total Selected Player : {selectedPlayer.length}</h5>
            </div>
            <div className="card-body">
                <ol className="list-group list-group-flush player-info-list">
                <h6>Selected Player List </h6>
                    {
                        selectedPlayer.map(player => <li className="list-group-item px-0" key={player.code}>{player.name} : <strong>£{player.salary}</strong></li> )
                    }
                </ol>          
            </div>
            <div className="card-footer">
                <h5 className="mb-0">Total Salary : £{totalSalary}</h5>
            </div>
            
        </div>
    );
};

export default SelectedPlayer;