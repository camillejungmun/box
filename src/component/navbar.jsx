import React, { Component } from 'react';


class NavBar extends Component {
    state = {}

    constructor(){
        super();
        console.log("NavBar - Constructor");
    }
    componentDidMount(){
        console.log("Boxes - Mount");
    }

    render() { 
        console.log("NavBar - render");
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Navbar <span>Boxes Count: {this.props.boxesCount}</span>
                        </a>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;
