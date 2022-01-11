import axios from "axios";

import React from 'react'


const ApiEndPoint = "http://localhost:8080/api"

async function _registerUrl(url) {
    console.log("API ",ApiEndPoint+'/registerUrl?url='+url)
    const output = await axios({
        method: 'get',
        url: ApiEndPoint+'/registerUrl?url='+url
        // data: {
        //   firstName: 'Finn',
        //   lastName: 'Williams'
        // }
      })
      .then((res) => {
          console.log("Success ",res);
          return res
      },(err)=>{ console.log("Error ",err) });
    console.log("Hurray " , output);
    return output.target_url
}

function requestHandler(url) {
    console.log("url : ",window.location.href)
    return window.location.href+_registerUrl(url)
}

export default requestHandler



// module default function registerUrl(url){
//         _registerUrl(url)
// }

// registerUrl("https://youtube.com")