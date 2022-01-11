import React from 'react'

import axios from "axios";

export default function Redirect(props) {
    const ApiEndPoint = "http://localhost:8080/api"

    var currentUrl = window.location.href.split("/");
    currentUrl = currentUrl[currentUrl.length - 1];
    // console.log("Got it..", currentUrl);

    axios.get(ApiEndPoint + '/findTargetUrl?target_url=' + currentUrl).then(resp => {
        console.log("Get Target ", resp.data.message);
        if ( resp.data.message === 'invalid' ) {

        } else {
            window.location.replace(resp.data.message.main_url);
        }
    });

    return (
        <div>
            <h1>redirecting in 5 seconds...</h1>
            {/* { console.log("Redirecting..." , currentUrl) } */}
        </div>
    )
}
