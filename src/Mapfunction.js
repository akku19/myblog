import React from 'react'
import Table from 'react-bootstrap/Table'
const Mapfunction = () => {
    const mapvalue = [
        {name:"akash",email:"akash@gmail.com",phone:888},
        {name:"rupali",email:"rupali@gmail.com",phone:1234},
        {name:"mahesh",email:"mahesh@gmail.com",phone:5434},
        {name:"annpurna",email:"annpurna@gmail.com",phone:12547},        
    ];
    return (
        <div className='container'>
            <div className='row'>
            <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            {mapvalue.map((item,index)=>{                
             return ( 
             <tr key={index}>
              <td>{index}</td>
              <td>{"my name is :"+item.name}</td>
              <td>{ "my email is :" + item.email }</td>
              <td>{`phone is ${item.phone}`}</td>                
            </tr>
           )
            })}
            </tbody>
            </Table>
            </div>
        </div>
    )
}

export default Mapfunction
