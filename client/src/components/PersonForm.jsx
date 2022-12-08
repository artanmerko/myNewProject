import React,{useState} from 'react'
import axios from 'axios';

const PersonForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const submitHander = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/new',{
      firstName,
      lastName
    })
      .then( res =>console.log(res) )
      .catch( err => console.log(err) )
  }

  return (
    <form onSubmit={submitHander}>
      <p>
        <label>First Name</label> <br />
        <input type='text' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
      </p>
      <p>
        <label>Last Name</label> <br />
        <input type='text' onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
      </p>
      <input type="submit" />
    </form>
  )
}

export default PersonForm;