import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Modal from './modal'


 let index=1
export default class Indiusers extends Component{

    
    componentDidMount(){
        index=1
        let d=this.props.match.params.userid
        axios.get("http://localhost:5000/users/"+d)
        .then(res=>
            {
                this.setState({data:res.data.amounts})
                this.setState({name:res.data.name})
            }
        )
        
               
    }
    componentDidUpdate(){
        index=1
    }
    constructor(props){
        super(props);
        this.state={
            data:[],
            name:''
        }
        this.delet=this.delet.bind(this)
    }
    delet=(amount)=>{
        if (window.confirm("Do you really want to Delete?"))
        { 
            axios.delete("http://localhost:5000/users/"+this.props.match.params.userid+'/amounts/'+amount._id)
            .then(res=>window.alert(res))
            window.location='/users/'+this.props.match.params.userid
        }
                                
    }
    render(){
        return(
        <div class="container-fluid text-center">
        <br/>
        <h4 class="h2-responsive text-info">Transaction of {this.state.name}</h4>
        <br/>
        
        <div class="container">
        <table class="table table-responsive-sm  table-light table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Amounts</th>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Option</th>
                </tr>
            </thead>

            <tbody>{
                this.state.data.map(amount=>
                {
                    return <tr>
                    <th scope="row">{index++}</th>
                    <td>{amount.amount}</td>
                    <td >{amount.createdAt.split('T')[0]}</td>
                    <td>{amount.description}</td>
                    <td>
                        <button class='btn text-primary' onClick={() => this.delet(amount)}>
                            <b><u>Delete</u></b>
                        </button>
                    </td>
                        
                    </tr>
                }
                )}
            </tbody>
        </table>
    </div>
                
                <div class="container">
                <div class="row">
                    <div class="col">
                    <div className=" float-right text-white" >
                    <Modal id={this.props.match.params.userid}/>
                    </div>
                    </div>
                </div>
                </div> 
           </div>
        )
    }
}