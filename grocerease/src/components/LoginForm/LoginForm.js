import React, {useState} from 'react';
import axios from 'axios';
import './LoginForm.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";
import logo from "../ncart-logo.png";

function LoginForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        redirectToHome();
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(API_BASE_URL+'/v1/login', payload)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    redirectToHome();
                    props.showError(null);
                }
                else if(response.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home')
        props.showError(null);
    }
    const redirectToRegister = () => {
        props.history.push('/register')
        props.updateTitle('Register')
        props.showError(null);;
    }
    return(
        <div className="card login-card mt-2 hv-center">
            <div className="logo">
                    <img src = {logo} width = "354" height = "222" alt="grocerease logo"/>
            </div>
            <form>
                <div className="form-group text-center">
                <label htmlFor="loginInstructions" style={{"font-size": "20px"}}>Log into your Grocerease account</label>
                </div>
                <div className="form-group text-left" >
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       style={{"width":"500px", "height": "60px","border": "solid deepskyblue",'borderRadius':'10px'}}
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="email address" 
                       value={state.email}
                       onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       style={{"width":"500px", "height": "60px","border": "solid deepskyblue",'borderRadius':'10px'}}
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div class="text-center">
                    <button
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleSubmitClick}>
                    Submit
                    </button>
                </div>
            </form>
            <div className="registerMessage">
                <span>Don't have an account? </span>
=======
                <button 
                    type="Submit" 
                    className="btn btn-primary"
                    style={{"width":"400px", "height": "40px","border": "solid dodgerblue",'borderRadius':'10px'}}
                    onClick={handleSubmitClick}
                >Log In</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage" style={{"margin-top":"5%"}}>
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
            </div>
        </div>
    )
}

export default withRouter(LoginForm);