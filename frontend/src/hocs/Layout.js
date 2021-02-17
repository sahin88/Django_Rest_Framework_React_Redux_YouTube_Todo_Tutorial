import React, { Component } from 'react'
import Navbar from'../components/Navbar'

export class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout
