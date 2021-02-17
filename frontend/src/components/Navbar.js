import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
export class Navbar extends Component {
    logoutHandle = (event) => {
        this.props.onLogout();
    
        //this.props.history.push("/login");
      };
    render() {
        return (
            <nav className="heading">
            <ul>
              <li>
                <Link className="header_btn"  to="/">
                  Posts
                </Link>
              </li>
              <li>
                {false ? (
                  <Link
                  className="header_btn"
                    onClick={this.logoutHandle}
                    to="/login"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link  className="header_btn" to="/login">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        )
    }
}

export default Navbar
