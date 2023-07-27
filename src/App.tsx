import './App.css'
import axios from "axios";

 axios({
     method: 'get',
     url: 'https://rickandmortyapi.com/api/character',
     responseType: 'stream'
 })
     .then(function (response) {
         console.log("Response status ",response.status)
         console.log("Response data",response.data)
     });

 function App() {
     return null;

 }

export default App
