import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <main>
        <h1>HomePage</h1>
        <p>Go to <Link to='/products'>go to products page</Link></p>
    </main>
  )
}

export default HomePage