import React, {useState} from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";
import logo from "../ncart-logo.png";

function RegistrationForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "email":state.email,
                "password":state.password,
            }
            axios.post(API_BASE_URL+'/v1/register', payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        redirectToHome();
                        props.showError(null);
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home')
        props.showError(null);
    }
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login')
        props.showError(null); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer();    
        } else {
            props.showError('Passwords do not match');
        }
    }
    return(
        <div className="card reg-card mt-2 hv-center">
            <div className="logo">
                    <img src = {logo} width = "354" height = "222" alt="grocerease logo"/>
            </div>
            <form>
                <div className="form-group text-center">
                <label htmlFor="registrationInstructions" style={{"font-size": "20px"}}>Register for your Grocerease account</label>
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       style={{"width":"500px", "height": "60px","border": "solid deepskyblue",'borderRadius':'10px'}}
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Email address" 
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
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        style={{"width":"500px", "height": "60px","border": "solid deepskyblue",'borderRadius':'10px'}}
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <div class="text-center">
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleSubmitClick}>
=======
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{"width":"400px", "height": "40px","border": "solid dodgerblue",'borderRadius':'10px'}}
                    onClick={handleSubmitClick}
                >
                    Register
                    </button>
                </div>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2" style={{"margin-top":"5%"}}>
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>
            
        </div>
    )
}

export default withRouter(RegistrationForm);