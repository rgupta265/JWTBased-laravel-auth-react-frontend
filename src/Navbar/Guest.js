
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Routes,Route} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';


function Guest() {
  
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/register" element ={<Register/>} />
        </Routes>

      </div>
    </>
  );
}

export default Guest;
