import {React , useState} from 'react'

import axios from "axios";

import { ApiEndPoint } from '../config';

export default function Redirect(props) {

    var currentUrl = window.location.href.split("/");
    currentUrl = currentUrl[currentUrl.length - 1];

    const [urlClickMe, seturlClickMe] = useState("");

    function urlParser(url) {
        url = url.split("/");
        var protocol = url[0];
        if (protocol === "http" || protocol === "https") {
            seturlClickMe(url);
            return url;
        } else {
            seturlClickMe("https://" + url);
            return "https://" + url;
        }
    }

    axios.get(ApiEndPoint + '/findTargetUrl?target_url=' + currentUrl).then(resp => {
        console.log("Get Target ", resp.data.message);
        if (resp.data.message === 'invalid') {

        } else {
            window.location.replace(urlParser(resp.data.message.main_url));
        }
    });

    return (
        <div>
            <h1>redirecting in 5 seconds...</h1>
            <input type='button' value={urlClickMe} ></input>
        </div>
    )
}
