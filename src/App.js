import React from 'react';
import Table from './Table.js';


class App extends React.Component{
    render(){
        const character =[
            {
                name: 'Max',
                job: 'Pilot',
            },
            {
                name: 'Sam',
                job: 'Cook',
            },
            {
                name: 'Dan',
                job: 'Driver',
            },
            {
                name: 'AB',
                job: 'Cricketer',
            },
        ]


        return(
            <div className="container" >
            <Table characterData={character}/>
            </div>
        )
    }
}

export default App
