import React from 'react'

import './style.css'

var QRCode = require('qrcode.react');

export default function Result(props) {
    //console.log(props);
    return (
        <>
            <div style={{ position: 'relative', padding: '10px 0px 0px 0px', justifyContent: 'center', display: 'inherit' }}>
                {/* <h3>Here is the result...</h3> */}
                <QRCode value={props.baseUrl + props.url} size={128} bgColor={"#ffffff"} fgColor={"#000000"} level={"L"} includeMargin={false} renderAs={"svg"} />
                <button className="result-link" onClick={() => { navigator.clipboard.writeText(props.baseUrl + props.url); }}  >
                    <h5>{props.baseUrl + props.url}</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-clipboard clipboard-img" viewBox="0 0 16 16">
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                    </svg>
                    {/* {console.log("Props ",props)} */}
                </button>
            </div>
        </>
    )
}
