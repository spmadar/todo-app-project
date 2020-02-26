import React, { Component } from "react";
import TodoItem from "./toDoItem.js";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "./actions";
class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
              handleToggleComplete={event => this.props.toggleTodo(todo.id)}
              handleDeleteTodo={event =>
                this.props.deleteTodo(todo.id)
              }
            />
          ))}
        </ul>
      </section>
    );
  }
}
const mapDispatchToProps = {
  deleteTodo,
  toggleTodo
};
export default connect(null, mapDispatchToProps)(TodoList);
