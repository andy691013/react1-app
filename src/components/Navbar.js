import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import { useEffect,useState } from 'react';

function Navbar1(){
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);
    return(<>
   
   <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={"nav-link" + (url === "/" || url === "home"?" active" : "")} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={"nav-link" + (url === "/about"?" active" : "")} to="/about"  >About</Link>
        </li>
        
      </ul>
      <ul className="d-flex right navbar-nav  mb-2 mb-lg-0 ">
      <li className="nav-item ">
          <Link className={"nav-link" + (url === "/login"?" active" : "")} to="/Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className={"nav-link" + (url === "/register"?" active" : "")} to="/Register">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>)
}
export default Navbar1;