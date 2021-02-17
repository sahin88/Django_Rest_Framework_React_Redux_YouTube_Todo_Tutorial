import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/signin.css'

export class Signin extends Component {
    render() {
        return (
           
            <div className="loginPage-container">
               
                <form
                    class="forms container"
                    method="POST"
                >
                    {/* <DjangoCSRFToken /> */}
                    <div>
                    <h2
                        className="h2"
                        style={{
                        color: "#fff",
                        position: "relative",
                        margin: "10px 100px",
                        }}
                    >
                        Login
                    </h2>
                    </div>
        
                    <div>
                    <p>Username</p>
                    </div>
                    <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Please Enter Username"
                    ></input>
                    </div>
                    <div>
                    <p>Password</p>
                    </div>
                    <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Please Enter Password"
                    ></input>
                    </div>
                    <div>
                    <button className="Button Login" type="submit">
                        Login
                    </button>
                    </div>
                    <a style={{ color: "darkgray", "font-size": "14px" }} href="#">
                    Forgot your Password?
                    </a>
                    <a style={{ color: "darkgray" }}>
                    <Link to="/signup">Sign Up!</Link>
                    </a>
                </form>
            </div>
        )
    }
}

export default Signin