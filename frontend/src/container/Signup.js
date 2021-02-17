import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/signup.css'
export class Signup extends Component {
    render() {
        return (
            <div className="signup-frame">
            <div className="SignupForm">
              <div>
                <h1 style={{ color: "#e75542" }}>Sign Up</h1>
              </div>
              <div className="f_s">
                <form className="SignupValue" onSubmit={this.HandleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                    ></input>
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    ></input>
                  </div>
       
                  <div>
                    <input
                      type="email"
                      name="email"
                      name="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div>
                    <input type="submit" value="Sign Up" />
                  </div>
                </form>
              </div>
              <a>
                <Link to="/login"> Already an Account?</Link>
              </a>
            </div>
          </div>
        )
    }
}

export default Signup
