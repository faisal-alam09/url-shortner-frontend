import React from 'react'


export default function Header() {
    return (
        <>
            <nav className="navbar navbar-default bg-primary" style={{position:"absolute" , width:'100%' , zIndex:'100'}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">
                            <img alt="Brand" src="logo192.png" width="50px" height="50px"/>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
