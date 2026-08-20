import { Component } from 'react'
import initialTodos from './todo.json'
import styles from './App.module.css'
import Info from './components/Info/Info'
import TodoEditor from './components/TodoEditor/TodoEditor'
import Filter from './components/Filter/Filter'
import TodoList from './components/TodoList/TodoList'
import { nanoid } from 'nanoid'

class App extends Component {

  state={
    todos: initialTodos,
    filter: '',
  }

  togleCompleted = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map(e => e.id === id?{...e, completed: !e.completed}: e)
    }))
  }

  removeTodo = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((item) => item.id !== id)
    }))
  }

  addTodo = (text) => {
    const newTodo = {
      id: nanoid(), 
      text: text, 
      completed: false, 
    }
    this.setState((prev) => ({
      todos: [...prev.todos, newTodo]
    }))
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

render() {

  const {todos, filter} = this.state

  const filteretTodo = todos.filter((todo) => todo.text.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))

    return (
    <div className={styles.app}>
      <Info total={this.state.todos.length} completed={this.state.todos.filter((todo) => todo.completed).length}/>
      <TodoEditor onAddTodo={this.addTodo}/>
      <Filter value={this.state.filter} onChange={this.changeFilter}/>
      <TodoList list={filteretTodo} onTogle={this.togleCompleted} onDelete={this.removeTodo}/>
      </div>
  )
}
}

export default App
