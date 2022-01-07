import React from 'react'
var QRCode = require('qrcode.react');

export default function qrcode_generator() {
    return (
        <div>
            <QRCode value="http://facebook.github.io/react/" />
        </div>
    )
}

