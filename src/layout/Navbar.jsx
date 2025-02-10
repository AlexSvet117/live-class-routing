import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <div className="mx-3"><Link to="/home">Home</Link></div>
        <div><Link to="/aboutus">About Us</Link></div>
        
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
