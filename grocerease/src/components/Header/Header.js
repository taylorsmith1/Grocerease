import React from 'react';
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
import myImage from "../ncart-logo.png";
function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/') {
        title = ''
    }
    function renderLogout() {
        if(props.location.pathname === '/home'){
            return(
                <div className="ml-auto">
                    <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
    }
    function handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN_NAME)
        props.history.push('/login')
    }
    return(
        <nav className="navbar navbar-light">
            <div className="row-20 col-12 d-flex justify-content-center text-white">
                <span className="h3">{props.title || title}</span>
                {renderLogout()}
            </div>
            <div className="row-20 col-12">
                <div className="myImage">
                    <img src = {myImage} width = "471" height = "296" alt="grocerease logo"/>
                </div>
            </div>
        </nav>
    )
}
export default withRouter(Header);