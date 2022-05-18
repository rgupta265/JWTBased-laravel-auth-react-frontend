
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Routes,Route} from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import AuthUser from '../components/AuthUser';

function Auth() {
    const {token,logout} =AuthUser();
  const logoutUser =()=>{
      if(token !=undefined)
      {
          logout();
      }

  }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <span role="button" className="nav-link" onClick={logoutUser} >Logout</span>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/dashboard" element ={<Dashboard/>} />
        </Routes>

      </div>
    </>
  );
}

export default Auth;
