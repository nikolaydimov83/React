import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import UserList from './components/UserList';
import { useState,useEffect } from 'react';
import { deleteUserById, getAllUsers } from './services/userServices';
import OverLap from './components/OverLap';
import { addUser } from './services/userServices';


function App() {
  const [users,setUsers]=useState([]);
  
   const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    getAllUsers().then(res=>res.json()).then((data)=>{
      setUsers(data.users);
      setIsLoading(false);

    })
  },[])

  function addUserFormSubmit(ev){
    ev.preventDefault()
    setIsLoading(true);
    const formData=new FormData(ev.currentTarget);
    const data=Object.fromEntries(formData);
    data.address={
      streetNumber:data.streetNumber,
      street:data.street,
      city:data.city,
      country:data.country

    }
    addUser(data).then(res=>res.json()).then((data)=>{
      console.log(users)
      
      setUsers((oldUsers)=>{
        console.log(oldUsers)
        return [...oldUsers,data.user]
      });
      
      console.log(users)
      setIsLoading(false);
    })
    
  }


  function deleteUserFormSubmit(ev,id){
    ev.preventDefault()
    setIsLoading(true);
  
    deleteUserById(id).then(res=>res.json()).then((data)=>{
      setUsers((oldUsers)=>oldUsers.filter((user)=>user._id!==id));
      setIsLoading(false);
    })
    
  }
  return (
    <div className="App">
      <Header/>
      <main className="main">
      <section className="card users-container">
        <Search/>
        {isLoading?<OverLap/>:<UserList users={users} addUserFormSubmit={addUserFormSubmit} deleteUserFormSubmit={deleteUserFormSubmit}/>}
        
      </section>
      </main>
      <Footer/>
    </div>
  );

  
}

export default App;
