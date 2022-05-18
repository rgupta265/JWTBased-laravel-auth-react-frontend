
import {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function Register(){
    const {http,setToken} = AuthUser();
    const navigate =useNavigate();
    const [name,setName] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();

    const submitForm =() =>{
        http.post('/register',{name:name,email:email,password:password}).then((res)=>{
            Navigate('/login')
        })
    }
    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                <div className="form-group mt-4">
                        <label>Name:</label>
                        <input type="text" className="form-control" placeholder="Enter Name"  onChange ={e=>setName(e.target.value)} id="name"/>
                    </div>
                <div className="form-group mt-4">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"  onChange ={e=>setEmail(e.target.value)} id="email"/>
                    </div>
                    <div className="form-group mt-4">
                        <label >Password:</label>
                        <input type="password" className="form-control " placeholder="Enter password" onChange ={e=>setPassword(e.target.value)} id="pwd"/>
                    </div>
                    
                    <button type="button" onClick ={submitForm} className="btn btn-primary mt-4">Submit</button>
                </div>
            </div>
            
        </div>
    )
}