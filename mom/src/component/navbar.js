import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ReactLogo from '../logo.svg';


export default class Navbar extends Component{
    render(){
        return(
            <>
            <div class="container-fluid">
                <nav class="navbar navbar-expand navbar-light bg-light">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link to="/" class="navbar" href="#"><h4 class="h4-responsive">Laxmi</h4></Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/users" class="nav-link"><h5 className="h5-responsive">Display</h5></Link>
                        </li>
                        <li class="nav-item">           
                        <Link to="/add" class="nav-link" ><h5 className="h5-responsive">Create</h5></Link> 
                        </li>
                    </ul>
                </nav>
            </div>
                         
            </>
        )
    }
}