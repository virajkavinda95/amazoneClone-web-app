import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //sign in to app
    const signIn = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password).then(auth => {
            history.push("/")
        }).catch(error => alert(error.message))
    }

    //Register a user
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then((auth) =>{
            if(auth){
            history.push("/")
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img 
                src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png" 
                alt="login-image" className="login__logo" />
            </Link>

            <div className="login__container">
                <h2>Sign-in</h2>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button onClick={signIn} className="login__signInButton" type="submit">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZONE CLONE conditions of Use & Sale. Please see our
                    Cookies Notice and Our interest-based Ads Notice.
                </p>
                <button onClick={register} type="button" className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
