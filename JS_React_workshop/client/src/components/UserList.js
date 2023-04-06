import { getUserById } from "../services/userServices";
import AddUserForm from "./AddUserForm";
import DeleteUser from "./DeleteUser";
import UserDetails from "./UserDetails";
import UserRow from "./UserRow";
import { useState } from 'react';

export default function UserList(props){
    const [user,setUser]=useState(null);
    const [userDetailsOpened,setUserDetailsOpened]=useState(false);
    const [addUserFormOpened,setAddUserFormOpened]=useState(false);
    const [deleteConfirmationOpened,setDeleteConfirmationOpened]=useState(false)

    async function getInfo(id){
        const userInfo=(await (await getUserById(id)).json()).user;
        setUser(userInfo);
        setUserDetailsOpened(true)
    
      }
      async function openDeleteUserForm(id){
        const userInfo=(await (await getUserById(id)).json()).user;
        setUser(userInfo);
        setDeleteConfirmationOpened(true);

      }

      async function closeDeleteUserForm(id){
        
        setUser(null);
        setDeleteConfirmationOpened(false);

      }

      async function openAddUserForm(id){
        if(id){
          const userInfo=(await (await getUserById(id)).json()).user;
          setUser(userInfo)
        }
    
    
        setAddUserFormOpened(true)
    
    
      }  
    
      /*async function deleteUser(id){
        setIsLoading(true)
        await deleteUser(id);
        getAllUsers().then(res=>res.json()).then((data)=>{
          setUser(data.users);
          setIsLoading(false);

        })
    
    
      }*/
    
      async function closeUserDetails(){
        setUser(null)
        setUserDetailsOpened(false)
      }
    
      async function closeAddEditForm(){
        setUser(null)
        setAddUserFormOpened(false)
      }

      function addUserFormSubmitHandler(ev,id){
        props.addUserFormSubmit(ev,id);
        closeAddEditForm();
      }


    return (
        <>
         <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                    <th>
                        Image
                    </th>
                    <th>
                        First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                        data-icon="arrow-down" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor"
                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                        </path>
                        </svg>
                    </th>
                    <th>
                        Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                        role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path fill="currentColor"
                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                        </path>
                        </svg>
                    </th>
                    <th>
                        Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                        role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path fill="currentColor"
                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                        </path>
                        </svg>
                    </th>
                    <th>
                        Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                        role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path fill="currentColor"
                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                        </path>
                        </svg>
                    </th>
                    <th>
                        Created
                        <svg className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                        data-icon="arrow-down" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor"
                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                        </path>
                    client    </svg>
                    </th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                   {props.users.map((user)=><UserRow key={user._id} user={user} openAddUserForm={openAddUserForm} getInfo={getInfo} setDeleteConfirmationOpened={setDeleteConfirmationOpened} openDeleteUserForm={openDeleteUserForm}/>)}
                </tbody>
            </table>
         </div>
         <button className="btn-add btn" onClick={()=>openAddUserForm()}>Add new user</button>
         {userDetailsOpened?<UserDetails user={user} closeUserDetails={closeUserDetails}/>:null}
         {addUserFormOpened?<AddUserForm user={user} closeAddEditForm={closeAddEditForm} addUserFormSubmitHandler={addUserFormSubmitHandler}/>:null}
         {deleteConfirmationOpened?<DeleteUser user={user} closeDeleteUserForm={closeDeleteUserForm} deleteUserFormSubmit={props.deleteUserFormSubmit}/>:null}
         </>
         
    )
}