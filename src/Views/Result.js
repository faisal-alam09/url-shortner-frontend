import React from 'react'
import qrcode_generator from '../Services/qrcode_generator'

var QRCode = require('qrcode.react');

export default function Result() {
    return (
        <div style={{ position:'absolute' , top:'180px' , left:'30%' }}>
            <h3>Here is the result...</h3>
            <QRCode value="http://facebook.github.io/react/" />
            <h5>Here is the link</h5>
        </div>
    )
}
