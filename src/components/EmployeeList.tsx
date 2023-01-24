import React from 'react'
import { TypeEmployee } from '../Employee.type'
import "./EmployeeList.scss"

type EmployeeListProps = {
    list: TypeEmployee[];
    handleDeleteEmployee: (employee: TypeEmployee) => void;
    handleViewEmployee: (employee: TypeEmployee) => void;
    handleEditEmployee: (employee: TypeEmployee) => void
}


function EmployeeList({list, handleDeleteEmployee, handleViewEmployee, handleEditEmployee}: EmployeeListProps) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.firstName} {employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <div className="actions">
                                <input type="button" value="View" className="button-view" onClick={() => handleViewEmployee(employee)} />
                                <input type="button" value="Edit" className="button-edit" onClick={() => handleEditEmployee(employee)}/>
                                <input type="button" value="Delete" className="button-delete" onClick={() => handleDeleteEmployee(employee)} />
                            </div>
                        </td>
                    </tr> 
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeList