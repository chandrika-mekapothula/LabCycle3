import React from 'react'
import type{Developer,updatedDeveloper} from '../types/Emp_data'

const Employee = () => {
    const developers: Developer[] = [
        { id: 1, name: "Alex", role: "Frontend", experience: 3, salary: 45000 },
        { id: 2, name: "John", role: "Backend", experience: 1, salary: 35000 },
        { id: 3, name: "Sarah", role: "Full Stack", experience: 5, salary: 65000 },
        { id: 4, name: "David", role: "Frontend", experience: 4, salary: 55000 },
    ];
    const filDev:Developer[]=developers.filter(
            (dev:Developer):boolean=>dev.experience>2
        )
    const expOrder:Developer[]=[...developers].sort((a,b)=>a.experience-b.experience)
    // const newDev:updatedDeveloper[]=developers.map((dev)=>{
    //     newDev.
    // })
    return (
        <div>
            <h1>Experienced Developers</h1>
            {
                filDev.map((dev)=>{
                    return (
                        <h3>{dev.name}</h3>
                    )
                })
            }
            <h1>Develorpes According to Experience</h1>
            {
                expOrder.map((dev)=>{
                    return(
                        <h3>{dev.name}: {dev.experience}</h3>
                    )
                })
            }

        </div>
        
    )
}

export default Employee