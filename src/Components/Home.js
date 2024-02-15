import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const status = localStorage.getItem('Logged');
    const navigate = useNavigate();
    function handlelogout() {
        localStorage.removeItem('Logged');
        navigate('/login');
    }
  return (
    <>
        <div className='text-center'>
            {
                status ? 
                    <>
                        <h1 className='mt-4'>Welcome Home</h1><br/>
                        <button onClick={handlelogout} type="submit" className="btn btn-primary">Logout</button>
                    </>
                 : 
                    <h1 className='mt-4'>Please <Link to="/login">Login</Link> or <Link to="/register">register</Link></h1>
            }
        </div>
    </>
  )
}

export default Home