import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component{
    render(){
        return(
            <>
            <div className="container-fluid text-center">
                <br/><br/>
                <p class = "text-muted h2 text-center">Welcome Laxmi</p>
                <div className="container-fluid ">
                <br/><br/><br/> 
                <button class="btn btn-primary text-white btn-block btn-lg">
                    <Link to="/add" class="text-white bold">
                        Naye Logon Ko Add Kare
                    </Link>
                </button>
                
                <button class="btn btn-warning   btn-lg btn-block">
                    <Link to ="/users" class="text-white bold">
                        Purana Bahikhata Dekhe
                    </Link>
                </button>
                
                </div>  
                </div>  
            </>
        )
    }
}