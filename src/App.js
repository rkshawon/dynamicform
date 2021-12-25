import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core';

function App() {
  const [inputFiedls, setinputField] = useState([{firstName: "", lastName: ""}])

  const handleInputChange = (event, index)=>{
    const values = [...inputFiedls]
    values[index][event.target.name] = event.target.value
    setinputField(values)
  }
  const handleForm = (e)=>{
    e.preventDefault()
  }
  const addInputField = (e) => {
    e.preventDefault()
    setinputField([...inputFiedls, {firstName: '', lastName: ''}])
  }
  const removeInputField = (index) => {
    console.log(index)
    const temp = [...inputFiedls]
    temp.splice(index, 1)
    setinputField(temp)
  }
  const sumbitValue = ()=>{
    console.log(inputFiedls)
    alert("Submitted")
  }
  return (
    <Container>
     <h1>Add New Member</h1>
      <form onSubmit={handleForm}>
        {inputFiedls.map((inputField, index)=>(
          <div key= {index}>
           <TextField
           name ="firstName"
           label = "First Name"
           variant = "filled"
           value = {inputField.firstName}
           onChange = {event=> handleInputChange(event, index)}
           />
           <TextField
           name ="lastName"
           label = "Last Name"
           variant = "filled"
           value = {inputField.lastName}
           onChange = {event=> handleInputChange(event, index)}
           />
           <button onClick = {addInputField}>Add</button>
           <button onClick = {()=>removeInputField(index)}>Remove</button>
          </div>  
          ))}
          <button onClick = {sumbitValue}>Send</button>
      </form>
    </Container>
  );
}

export default App;
