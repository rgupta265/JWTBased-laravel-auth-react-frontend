
import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

export default function Dashboard(){
    const {http} =AuthUser();
    const [userDetail,setUserdetail] =useState('');

    useEffect (()=>{
        fetchuserDetail();
    },[]);

    const fetchuserDetail =()=>{
        http.post('/me').then((res)=>{
            setUserdetail(res.data);
        })
    }

    function renderElement(){
        if(userDetail){
            return <div>
            <h4>Name</h4>
            <p>{userDetail.name}</p>
            <h4>Email</h4>
            <p>{userDetail.email}</p>
            
        </div>
            
        }
        else
        {
            return <p>Please Wait.........</p>      
            
        }
    }
    return(
        <div>
            <h1 className='mb-4 mt-4'>Dashboard page</h1>
            { renderElement() }
        </div>
       
    )
}