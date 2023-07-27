import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

// ----------------Read----------------
//  axios({
//      method: 'get',
//      url: 'https://reqres.in/api/users?page=2',
//  })
//      .then(function (response) {
//          console.log("GET / READ")
//          console.log("Response status ",response.status)
//          console.log("Response data",response.data)
//      });
//
// // ----------------Create----------------
// axios({
//     method: 'post',
//     url: 'https://reqres.in/api/users',
//     data: {
//         "name": "morpheus",
//         "job": "leader"
//     }
// }).then(function (response) {
//     console.log("POST / CREATE")
//     console.log("Response status ",response.status)
//     console.log("Response data",response.data)
// });
//
// // ----------------UPDATE----------------
// axios({
//     method: 'put',
//     url: 'https://reqres.in/api/users/2',
//     data: {
//         "name": "morpheus",
//         "job": "zion resident"
//     }
// }).then(function (response) {
//     console.log("PUT / UPDATE")
//     console.log("Response status ",response.status)
//     console.log("Response data",response.data)
// });
//
// // ----------------DELETE----------------
// axios({
//     method: 'delete',
//     url: 'https://reqres.in/api/users/2',
// }).then(function (response) {
//     console.log("DELETE")
//     console.log("Response status ",response.status)
//     console.log("Response data",response.data)
// });

    type User = {
        id: number;
        first_name: string;
        last_name: string;
    }

 function App() {
     const [users, setUsers] = useState<undefined|User[]>(undefined);
    useEffect(() =>{
        axios({
            method: 'get',
            url: 'https://reqres.in/api/users?page=2',
        })
            .then(function (response) {
                console.log("GET / READ")
                console.log("Response status ",response.status)
                console.log("Response data",response.data)
                setUsers(response.data.data)
            });
    }
    )
     console.log("Rendering")
     return (users === undefined ? <div>Loading</div> : (
     <ul>
         {users.map(user => <li key={user.id}>{user.first_name} {user.last_name}</li>)}
     </ul>
     ));

 }

export default App
