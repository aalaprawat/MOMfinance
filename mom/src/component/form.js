import React,{Component} from 'react';
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'


export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',amount:null};
  
      this.handleamount = this.handleamount.bind(this);
      this.handlereason = this.handlereason.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleamount(event) {
        this.setState({
          amount: event.target.value   
        });
      }
    handlereason(event) {
        this.setState({
          reason: event.target.value
        });
      }
  
    handleSubmit(event) {
    event.preventDefault();
      let body = {
        amount:this.state.amount,
        description:this.state.reason
      }
      axios.post("http://localhost:5000/users/"+this.props.id,body)
      .then((res)=>{console.log(res)})
      .catch((err)=>{console.log(err)})
      alert("Transactions Added")
      window.location='/users/'+this.props.id

    }
  
    render() {
      return (
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" value ={this.state.amount} onChange={this.handleamount} placeholder="Enter Amount Borrowed" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Reason" onChange={this.handlereason} value ={this.state.reason}/>
        </Form.Group>
        <Button className="float-right"  float ="right" onClick={this.handleSubmit}>
            Submit
        </Button>
        <br/><br/><br/>
        </Form>
      );
    }
  }