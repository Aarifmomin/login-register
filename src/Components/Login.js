import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Login = ({abc}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const initArray = { email:'', password:''}
  const [formData, setFormData] = useState(initArray)

  const storeArray = JSON.parse(localStorage.getItem('userData'));

  function handleChange(e) {
      const name = e.target.name;
      const value= e.target.value;
      setFormData(values => ({...values, [name]:value, id:new Date().getTime().toString()}));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(storeArray === '') {
      document.querySelector('.errorMsg').innerHTML = 'No record Found. Please register.'
    } else {
      let getLogged = storeArray.filter(arr => {
        return (arr.email === formData.email && arr.password === formData.password)
      })
      if(getLogged.length !== 0) {
        localStorage.setItem('Logged', true);
        document.querySelector('.loader').style.display="flex"
        setTimeout(()=> {
          navigate('/')
        }, 2000)
      } else {
        document.querySelector('.errorMsg').innerHTML = 'Please check email or password';
      }
    }
  }

  return (
    <div className="form-box">
        <h1 className='mb-4'>Login {abc}</h1>
        <div className='errorMsg'></div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={handleChange} name="email" type="email" className="form-control" placeholder="Enter email" value={formData.email} required />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={handleChange} type="password" name="password" className="form-control" placeholder="Password" value={formData.password} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className='mt-3'><strong>New User ? <Link to="/register">Register Here</Link></strong></div>
        <div className='loader' style={{display:'none'}}><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" title="" /></div>
    </div>
  )
}

export default Login