import React, {Component} from 'react';
import './App.css';

import HeaderTodo from './components/header-todo';
import SearchAndFilter from './components/search-and-filter';
import TodoList from './components/todo-list';
import AddItem from './components/add-item';


class App extends Component {
  count=100;

state = {
  arr:[
    {nameTask:'to drink coffee', id:1, done:false},
    {nameTask:'start a projecto', id:2, done:true},
    {nameTask:'turn on music', id:3, done:false}
  ],
  search:'',
  filter:'all'
}
  changeTodoList = (id) => {
    this.setState((state) => {
      const idx = this.state.arr.findIndex((e) => e.id === id);
      return {
        arr: [
          ...this.state.arr.slice(0, idx),
          ...this.state.arr.slice(idx + 1)
        ]
      }
    })
  }
  changeDone = (id) => {
    this.setState((state) => {
      const idx = this.state.arr.findIndex((e) => e.id === id);
      const task = this.state.arr[idx];
      task.done = !task.done;
      return {
        arr: state.arr
      }
    })
  }

  newTask = (textTask) => {
    const newTask = { nameTask: textTask, id: this.count++, done: false };
    const newArr = [
      ...this.state.arr,
      newTask
    ];
    this.setState({
      arr: newArr
    })
  }

  setSearchTask = (text) => {
    this.setState((state) => {
      return {
        search: text
      }
    })
  }

  searchArr = (arr, searchText) => {
    if (searchText === '') { 
      return arr
     }
    const newArr = arr.filter((e) => e.nameTask.indexOf(searchText) > -1);
    return newArr;
  }

  filter = (arr, filter) => {
    if (filter === 'active') {
      return arr.filter((e) => !e.done)
    } else if (filter === 'done') {
      return arr.filter((e) => e.done)
    } else {
      return arr;
    }
  }

  changeFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  render() {
    const { arr, search, filter } = this.state;
    const searchArr = this.filter(this.searchArr(arr, search), filter);

    return (
      <div className="App d-flex justify-content-center align-items-center vw-100 vh-100">
        <div className="todo border border-success w-75">
          <HeaderTodo />

          <SearchAndFilter searchTask={this.setSearchTask}
                            activeFilter={this.changeFilter} />

          <TodoList todoArr={searchArr}
                    changeTodoList={this.changeTodoList}
                    changeDone={this.changeDone} />

          <AddItem newTask={this.newTask} />
        </div>
      </div>
    );
  }
}

export default App;
