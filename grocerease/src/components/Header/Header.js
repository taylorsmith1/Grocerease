import React from 'react';
import { withRouter, NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { NavDropdown} from 'react-bootstrap';
import { ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Header(props) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // GENERATE PAGE TITLE FOR HEADER
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        var pageTitle = s.charAt(0).toUpperCase()
        for (var i = 1; i < s.length; i++) {
            if (s.charAt(i) === s.charAt(i).toUpperCase()) {
                pageTitle += ' ' + s.charAt(i).toUpperCase()
            } else {
                pageTitle += s.charAt(i)
            }
          }
        return pageTitle
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/') {
        title = 'Welcome'
    }
    
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

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
    return (
        <nav class="navbar navbar-expand-lg navbar-custom">
            <a class="navbar-brand navbar-brand-custom" href="/home">Grocerease</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <NavLink className="navlink text-white navbar-item" 
                    to='/home' 
                    activeClassName="navbar-item-active">
                    Home
                </NavLink>
                <NavLink className="navlink text-white navbar-item" 
                    to='/purchaseHistory' 
                    activeClassName="navbar-item-active">
                    Purchases
                </NavLink>
                </ul>
            </div>
            <NavDropdown title={<span className="text-white">Account</span>}
                id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Account Settings</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Notifications</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Privacy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Log Out</NavDropdown.Item>
            </NavDropdown>
        </nav>
    )
}
export default withRouter(Header);