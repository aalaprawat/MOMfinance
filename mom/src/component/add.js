import React,{Component} from 'react';
import axios from 'axios'

export default class Add extends Component{
    constructor(props){
        super(props);
        this.state = {name: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({name:event.target.value});
    }

    handleSubmit(e){
        e.preventDefault()
        const user={
            name:this.state.name
        }
        axios.post("http://localhost:5000/users/",user)
        .then((res)=>{console.log(res.data)})
        this.setState({name:""})
        alert("User Added")
    }

    render(){
        return(
            
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input class="form-control" onChange={this.handleChange} value={this.state.name}  placeholder="Name"></input>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} class="btn btn-primary">Submit</button>
                </form>
            
        )
    }
}