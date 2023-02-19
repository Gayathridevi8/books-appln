



import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Nav from "../components/NavbarFire"
import { Navigate } from "react-router-dom"
import { isAuthenticated } from "../services/Auth"
import { logout } from "../services/Auth"
import { UserDetailsApi } from "../services/Api"

export default function DashboardPage(){
    const navigate=useNavigate();
 
    const [user,setUser] = useState({name:"",email:"",localId:""})

    useEffect(()=>{
        if(isAuthenticated()){

            UserDetailsApi().then((response)=>{
             
               
                setUser({
                    name:response.data.users[0].displayName,
                    email:response.data.users[0].email,
                    localId:response.data.users[0].localId,
                })
            })

        }
            
       
    },[])

   const logoutUser =()=>{
       logout();
       navigate('/login');
   }


   if(!isAuthenticated()){
    //redirect user to dashboard page
    return <Navigate to="/login"/>
   }

    return (
        <div>
            <Nav logoutUser={logoutUser} />
           
            <main role="main" className="container mt-5">
                <div className="container">
                    <div className="text-center mt-5">
                        <h3>Dashboard page</h3>
                        { user.name && user.email && user.localId ?
                            (<div>
                                <p className="text-bold " >Hi {user.name}, your Firebase ID is {user.localId}</p>
                                <p>Your email is {user.email}</p>
                            </div>)
                            : <p>Loading...</p>
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}