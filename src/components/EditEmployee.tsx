import React, { useState } from 'react'
import { TypeEmployee } from '../Employee.type'
import "./EditEmployee.scss"

type Props = {
    employeeToEdit: TypeEmployee;

    handleSubmitEdit: (employeeEdited: TypeEmployee, firstNameEdited: string, lastNameEdited: string, emailEdited: string) => void;
    
    setEmployeeToEdit: any;
    handleEditModal: () => void;
}

function EditEmployee({handleEditModal, employeeToEdit, handleSubmitEdit}: Props) {

    const [firstNameEdited, setFirstNameEdited] = useState<string>(employeeToEdit.firstName)
    const [lastNameEdited, setLastNameEdited] = useState<string>(employeeToEdit.lastName)
    const [emailEdited, setEmailEdited] = useState<string>(employeeToEdit.email)

  return (
    <div className="modal-edit">
        <div className="modal-content content-edit">
        <div>
            <h2>Edit employee</h2>
        </div>

        <div>
            <label htmlFor="firstname">First Name: </label>
            <input type="text" name="firstname" id="firstname" placeholder='First Name' value={firstNameEdited} onChange={(e) => setFirstNameEdited(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="lastname">Last Name: </label>
            <input type="text" name="lastname" id="lastname" placeholder='Last Name' value={lastNameEdited} onChange={(e) => setLastNameEdited(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder='Email' value={emailEdited} onChange={(e) => setEmailEdited(e.target.value)}/>
        </div>
        <div className='buttons-add'>
            <input className="back-employee" type="button" value="Back" onClick={() => handleEditModal()}/>
            <input className="add-employee" type="submit" value="Edit Employee" onClick={() => handleSubmitEdit(employeeToEdit, firstNameEdited, lastNameEdited, emailEdited)}/>
        </div>
        </div>
    </div>
  )
}

export default EditEmployee