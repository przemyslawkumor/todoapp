import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';
class App extends Component {
  counter = 9
  state = {
    tasks: [
      { id: 1, text: "zrobić dobry uczynek", date: '2023-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: "zrobić zakupy", date: '2022-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: "schudnąć 10 kilogramów", date: '2022-05-20', important: true, active: true, finishDate: null },
      { id: 4, text: "iść na spacer z psem", date: '2022-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: "zrobić bude dla psa", date: '2022-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: "iść do fryzjera!", date: '2022-05-20', important: true, active: true, finishDate: null },
      { id: 7, text: "iść na siłownie", date: '2022-22-12', important: false, active: true, finishDate: null },
      { id: 8, text: "spotkać się z rodziną", date: '2022-22-11', important: false, active: true, finishDate: null },
    ]
  }
  deleteTask = (id) => {
    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    });
  }
  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    });
    this.setState({
      tasks
    })
  }
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    }
    this.counter++
    console.log(task)
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }
  render() {
    return (
      <div className="App" >
       <p class="name-app">To-Do App</p> 
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div >
    );
  }
}
export default App;








