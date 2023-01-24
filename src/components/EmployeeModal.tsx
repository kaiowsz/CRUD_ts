import React from 'react'
import { TypeEmployee } from '../Employee.type';
import "./EmployeeModal.scss"

type Props = {
    handleModal: () => void;
    employee: TypeEmployee;
}

function EmployeeModal({handleModal, employee}: Props) {


  return (
    <div className="employee-modal">
        <div className="content-modal">
            <button className="close-modal" onClick={() => handleModal()}><img src="./close.svg" alt="close button"/></button>
            <h3>Employee Info</h3>
            <p>First Name: {employee.firstName}</p>
            <p>Last Name: {employee.lastName}</p>
            <p>Email: {employee.email}</p>
        </div>
    </div>
  )
}

export default EmployeeModal