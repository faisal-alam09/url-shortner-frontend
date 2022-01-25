import {React , useState} from 'react'

import axios from "axios";

import { ApiEndPoint } from '../config';

export default function Redirect(props) {

    var currentUrl = window.location.href.split("/");
    currentUrl = currentUrl[currentUrl.length - 1];

    const [urlClickMe, seturlClickMe] = useState("");

    function urlParser(url) {
        var split_url = url.split("/");
        var protocol = split_url[0];
        console.log(protocol , url);
        if (protocol === "http:" || protocol === "https:") {
            seturlClickMe(url);
            return url;
        } else {
            seturlClickMe("https://" + url);
            return "https://" + url;
        }
    }

    axios.get( ApiEndPoint + '/findTargetUrl', {
        params: {
            target_url: currentUrl
        }
    }).then(resp => {
        console.log("Get Target ", resp.data.message);
        if (resp.data.message === 'invalid') {

        } else {
            var main_url = urlParser(resp.data.message.main_url);
            console.log(main_url);
            window.location.replace(main_url);
            window.location.href = main_url;
        }
    });

    return (
        <div>
            <h1>redirecting in 5 seconds...</h1>
            <a href={urlClickMe} > click Here to Redirect </a>
        </div>
    )
}
