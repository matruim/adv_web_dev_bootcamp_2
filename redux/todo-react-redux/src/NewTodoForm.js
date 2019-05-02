import React, {Component} from 'react';

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
        
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.handleSubmit(this.state.task)
        e.target.reset();
        this.props.history.push("/todos")
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='task' id='task' placeholder='new task' onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        );
    }
}

export default NewTodoForm;