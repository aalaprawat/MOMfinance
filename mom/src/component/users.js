import React,{Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';



const Borrowerlist = props =>{
    let index=1

    return props.props.map(borrower=>{
                            
        return(
            
            <tr>
            <th scope="row">{index++}</th>
            <td>{borrower.name}</td>
            <td>{borrower.amounts.length} transactions</td>
            <td><Link to={"/users/"+borrower._id}>Show</Link></td>
            </tr>
        )
        })
}

export default class Users extends Component{

    constructor(props){
        
        super(props);
        this.index=1
        this.state={
            name:'',
            json:[]
        }
    }
    
    
    
    componentDidMount(){
        axios.get("http://localhost:5000/users")
        .then((response)=>{
            this.setState({
                json:response.data
            })
        })
        .catch((err)=>{console.log(err)})
    }

    render(){
        return(
            <>  
                <div className="container text-center">
                <br/>
                    <h4 className="h4-responsive text-primary">NAMES</h4>
                    <br/>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Show All</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                <Borrowerlist props={this.state.json} index={this.state.index} ></Borrowerlist>
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}