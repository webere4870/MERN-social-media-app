import React from 'react'
import {Link} from 'react-router-dom'

export default function Form(props)
{
    let [form, setForm] = React.useState({email: "", password: "", name: ""})
    let [dummyData, setDummyData] = React.useState("")
    function changeForm(evt)
    {
        let name = evt.currentTarget.name
        let value = evt.currentTarget.value
        setForm((prev)=>
        {
            return {...prev, [name]: value}
        })
    }
    async function collectForm(evt)
    {
        evt.preventDefault()
        if(props.page == "login")
        {
            let data = await fetch("/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form)
            })
            let json = await data.json()
            setDummyData(JSON.stringify(json))
        }
    }
    return (
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form>
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" name='email' placeholder="Email" onChange={changeForm} value={form.email}/>
                    <input type="password" name='password' onChange={changeForm} placeholder="Password" value={form.password}/>
                    <a href="#">Forgot your password?</a>
                    <button onClick={collectForm}>{props.page == "login" ? "Login" : "Sign Up"}</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, {dummyData}</h1>
                        <p>Enter your personal details and start journey with us</p>
                        {props.page == "login"? <Link to={"/register"}><button className="ghost" id="signUp">Sign Up</button></Link>  : <Link to={"/login"}><button className="ghost" id="signUp">Login</button></Link> }
                        
                    </div>
                </div>
            </div>
            <h1>{dummyData}</h1>
        </div>
    )
}