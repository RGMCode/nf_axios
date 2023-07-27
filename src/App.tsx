import './App.css'
import axios from "axios";

// ----------------Read----------------
 axios({
     method: 'get',
     url: 'https://reqres.in/api/users?page=2',
 })
     .then(function (response) {
         console.log("GET / READ")
         console.log("Response status ",response.status)
         console.log("Response data",response.data)
     });

// ----------------Create----------------
axios({
    method: 'post',
    url: 'https://reqres.in/api/users',
    data: {
        "name": "morpheus",
        "job": "leader"
    }
}).then(function (response) {
    console.log("POST / CREATE")
    console.log("Response status ",response.status)
    console.log("Response data",response.data)
});

// ----------------UPDATE----------------
axios({
    method: 'put',
    url: 'https://reqres.in/api/users/2',
    data: {
        "name": "morpheus",
        "job": "zion resident"
    }
}).then(function (response) {
    console.log("PUT / UPDATE")
    console.log("Response status ",response.status)
    console.log("Response data",response.data)
});

// ----------------DELETE----------------
axios({
    method: 'delete',
    url: 'https://reqres.in/api/users/2',
}).then(function (response) {
    console.log("DELETE")
    console.log("Response status ",response.status)
    console.log("Response data",response.data)
});


 function App() {
     return null;

 }

export default App
