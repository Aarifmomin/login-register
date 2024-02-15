import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const initArray = { email:'', password:'', confPassword:''}
    const [formData, setFormData] = useState(initArray);
    const [collection, setCollection] = useState(JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')) : '');
    const abc= 123;

    function handleChange(e) {
        const name = e.target.name;
        const value= e.target.value;
        setFormData(values => ({...values, [name]:value, id:new Date().getTime().toString()}));
    }
    function handleSubmit(e) {
        e.preventDefault();
        document.querySelector('.loader').style.display="flex"
        setCollection((allArr) => ([...allArr, formData]))
        setTimeout(()=> {
            navigate('/login',{
                state: {
                    message: 'Registered successfully !!!',
                }});
        }, 2000)
    }
    useEffect(()=> {
        localStorage.setItem('userData', JSON.stringify(collection));
    }, [collection])
  return (
    <div className="form-box">
        <h1 className='mb-4'>Register</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={handleChange} name="email" type="email" className="form-control" placeholder="Enter email" value={formData.email} required />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={handleChange} name="password" type="password" className="form-control" placeholder="Password" value={formData.password} required/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input onChange={handleChange} name="confPassword" type="password" className="form-control" placeholder="Confirm Password" value={formData.confPassword} required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className='mt-3'>Already Have Account ? <Link to="/login"><strong>Login Here</strong></Link></div>
        <div className='loader' style={{display:'none'}}><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" title="" /></div>
    </div>
  )
}

export default Register