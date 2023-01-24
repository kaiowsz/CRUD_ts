import React, { FormEvent, SetStateAction, useState } from 'react'
import { TypeEmployee } from '../Employee.type';
import "./AddEmployee.scss"

type Props = {
    handleClick: (action: string) => void;
    handleAddEmployee: (employee: TypeEmployee) => void;
}

function AddEmployee({handleClick, handleAddEmployee}: Props) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const employee: TypeEmployee = {
            firstName,
            lastName,
            email,
            id: new Date().toJSON().toString()
        }

        try {

            if (employee.email === "" || employee.firstName === "" || employee.lastName === "") {
                throw new Error("Fill the fields correctly.")
            }
            handleAddEmployee(employee)

            alert("Employee added successfully.")
            handleClick("list")
        } catch (error) {
            alert(error)           
        }
        
    }

  return (
    <form>
        <div>
            <h2>Add employee</h2>
        </div>
        <div>
            <label htmlFor="firstname">First Name: </label>
            <input type="text" name="firstname" id="firstname" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="lastname">Last Name: </label>
            <input type="text" name="lastname" id="lastname" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='buttons-add'>
            <input className="back-employee" type="button" value="Back" onClick={() => handleClick("list")}/>
            <input className="add-employee" type="submit" value="Add Employee" onClick={(e) => handleSubmit(e)}/>
        </div>
    </form>
  )
}

export default AddEmployee