import React from 'react';
import ReactDOM from 'react-dom';


const TableHeader =()=>{
    return(
        <thead/>
    )
}

const TableBody=props=>{
    const row = props.characterData.map((row, index)=>{
        return(
            <tr key ={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            </tr>
        )
    })
    return(
        <tbody>{row}</tbody>
    )  
}
class Table extends React.Component{
    render(){
        const {characterData}  =this.props
        return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
                </table>
        )
    }
}


export default Table