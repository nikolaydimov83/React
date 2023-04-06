const baseUrl='http://localhost:3005/api';

export async function getAllUsers(){
    return fetch(baseUrl+'/users');

}

export async function getUserById(id){
    return fetch(baseUrl+'/users/'+id);

}

export async function deleteUserById(id){
    let options={
        method:'DELETE',
        headers:{}
    }
    options.headers['Content-Type']='application/json';

    return fetch(baseUrl+'/users/'+id,options);

}
export async function addUser(user){
    let options={
        method:'POST',
        headers:{}
    }
    options.headers['Content-Type']='application/json';
    options.body=JSON.stringify(user);

    return fetch(baseUrl+'/users',options);

}

export async function editUser(id,user){
    let options={
        method:'PUT',
        headers:{}
    }
    options.headers['Content-Type']='application/json';
    options.body=JSON.stringify(user);

    return fetch(baseUrl+'/users/'+id,options);

}