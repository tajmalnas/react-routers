import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/products');
    }

  return (
    <>
        <h1>HomePage</h1>
        <p>Go to <Link to='products'>go to products page</Link></p>
        <button onClick={navigateHandler}>Navigate</button>
    </>
  )
}

export default HomePage