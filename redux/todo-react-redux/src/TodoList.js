import React, {Component} from 'react';
import Todo from './Todo.js';
import {connect} from 'react-redux';
import {addTodo, removeTodo, getTodos} from './actionCreators';
import {Route} from 'react-router-dom';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    componentDidMount(){
        this.props.getTodos();
    }
    
    handleAdd(val){
        this.props.addTodo(val);
    }
    removeTodo(id){
        this.props.removeTodo(id);
    }
    render(){
        let todos = this.props.todos.map((todo) => <Todo removeTodo={this.removeTodo.bind(this,todo._id)}task={todo.task} key={todo._id}/>);
        return (
            <div>
                <Route exact path='/todos/new' component={(props) =>(<NewTodoForm {...props} handleSubmit={this.handleAdd}/>)} />
                <Route exact path='/todos' component={() => <div>{todos}</div>} />
            </div>
        );
    }
}

function mapStateToProps(reduxState){
    return {
        todos: reduxState.todos
    }
}

export default connect(mapStateToProps, {addTodo, removeTodo, getTodos})(TodoList);