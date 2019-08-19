import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4 bg-light">
            <div className="card-title text-center">
                <span className="badge badge-pill badge-danger ml-2">
                <h3>{todo.nombre}</h3>
              </span>
            </div>
            <div className="card-body text-center">
                <h4>{todo.fecha}</h4>
                <h4>{todo.regalo}</h4>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                eliminar
              </button>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-light">
          <span>
            <a className="navbar-brand bg-dark" href="/">
                Personas
                <span className="badge badge-pill badge-light ml-2">
                    {this.state.todos.length}
                </span>
            </a>
          </span>
        </nav>
                 <div className="jumbotron text-center" id="contenedor1">
                    <h1 className="display-3" id="titulop" >Lista de cumpleaños</h1>
                </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
            
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
