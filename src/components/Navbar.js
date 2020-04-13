import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import each module by it self because importing '@material-ui/core' will make the app slower
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export class Navbar extends Component {
    render() {
        return (
            <AppBar position="fixed">
                <Toolbar className="nav-container">
                    <Link to="/" >
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/login" >
                        <Button color="inherit">Login</Button>
                    </Link>
                    <Link to="/signup" >
                        <Button color="inherit" >Signup</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
