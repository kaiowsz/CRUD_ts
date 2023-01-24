import React, { useEffect, useState } from 'react'
import "./Home.scss"
import { TypeEmployee, TypeEmployeeList } from '../Employee.type'
import EmployeeList from '../components/EmployeeList'

import Navbar from '../components/Navbar'
import AddEmployee from '../components/AddEmployee'
import EmployeeModal from '../components/EmployeeModal'
import EditEmployee from '../components/EditEmployee'

function Home() {

  const [employeeList, setEmployeeList] = useState <TypeEmployee[]>(TypeEmployeeList)

  const [showPage, setShowPage] = useState<string>("list")
  const [employeeModal, setEmployeeModal] = useState<boolean>(false)
  const [editEmployee, setEditEmployee] = useState<boolean>(false)

  const [employeeInfo, setEmployeeInfo] = useState<any>([])

  const [employeeToEdit, setEmployeeToEdit] = useState({})

  useEffect(() => {
    const employeesStorage = JSON.parse(localStorage.getItem("employees"))

    if(employeesStorage) {
      setEmployeeList(employeesStorage)
    }
  }, [])

  function handleClick(action: string) {
    setShowPage(action)
  }

  function handleModal() {
    setEmployeeModal(!employeeModal)
    console.log(employeeModal)
  }

  function handleEditModal() {
    setEditEmployee(!editEmployee)
  }

  function handleSubmitEdit(employeeToEdit: TypeEmployee, firstNameEdited: string, lastNameEdited: string, emailEdited: string) {
    const findEmployeeToEdit = employeeList.filter(myemployee => myemployee.id === employeeToEdit.id)

    findEmployeeToEdit.map(employee => (
      employee.firstName = firstNameEdited,
      employee.lastName = lastNameEdited,
      employee.email = emailEdited
    ))

    const filteredEmployees = employeeList.filter(myemployee => myemployee.id !== employeeToEdit.id)

    
    filteredEmployees.push(findEmployeeToEdit[0])
    setEmployeeList(filteredEmployees)

    alert("Employee edited successfully.")
    setEditEmployee(!editEmployee)
    localStorage.setItem("employees", JSON.stringify(filteredEmployees))
  }

  function handleViewEmployee(employee: TypeEmployee) {
    const employeeToView = employeeList.find(myemployee => myemployee.id === employee.id)
    console.log(employee)
    console.log(employeeToView)

    setEmployeeInfo(employeeToView)
    handleModal()
  }

  function handleEditEmployee(employee: TypeEmployee) {
    handleEditModal()
    setEmployeeToEdit(employee)
  }

  function handleDeleteEmployee(employee: TypeEmployee) {
    const filteredEmployees = employeeList.filter(myemployee => myemployee.id !== employee.id)
    
    setEmployeeList(filteredEmployees)
    localStorage.setItem("employees", JSON.stringify(filteredEmployees))
  }


  function handleAddEmployee(employee: TypeEmployee) {
    setEmployeeList(prev => [...prev, employee])
    const addedEmployee = [...employeeList, employee]
    localStorage.setItem("employees", JSON.stringify(addedEmployee))
  }

  return (
    <div>
      <Navbar/>

      <div className="content">
      {
        showPage === "list" && 
        <>
        <div className="info-employees">
        <h2>List of Employees</h2>
        <input type="button" value="Add Employee" className="add-employee" onClick={() => handleClick("add")}/>
        </div>
        <EmployeeList list={employeeList} handleDeleteEmployee={handleDeleteEmployee} handleViewEmployee={handleViewEmployee} handleEditEmployee={handleEditEmployee}/>
        </>
      }

      {
        showPage === "add" && 
        <AddEmployee handleClick={handleClick} handleAddEmployee={handleAddEmployee}/>
      }

      {
        employeeModal === true && <EmployeeModal handleModal={handleModal} employee={employeeInfo}/>
      }

      {
        editEmployee === true && <EditEmployee employeeToEdit={employeeToEdit} handleSubmitEdit={handleSubmitEdit} handleEditModal={handleEditModal}/>
      }

      </div>

      <footer>
        <p>made with ❤️ by kaiowsz &reg;</p>
      </footer>

    </div>
  )
}

export default Home