import React from 'react';
import Todo from './components/todo/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: "1",
          title: "Сходить в детский сад",
          isDone: false
        },
        {
          id: "2",
          title: "Сходить в школу",
          isDone: false
        },
        {
          id: "3",
          title: "Сходить в универ",
          isDone: false
        },
        {
          id: "4",
          title: "Сходить на работу",
          isDone: false
        },
        {
          id: "5",
          title: "Сходить ещё куда-нибудь",
          isDone: false
        },
        {
          id: "6",
          title: "Умереть",
          isDone: false
        }
      ]
    }

    this.handleDoneChange = this.handleDoneChange.bind(this);
    this.handleRemoveChange = this.handleRemoveChange.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
  }

  handleDoneChange(id) {
    const newTodoListAfterDone = this.state.todoList.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    this.setState(state => ({
      ...state,
      todoList: newTodoListAfterDone
    }));
  }

  handleRemoveChange(id) {
    const newTodoListAfterRemove = this.state.todoList.filter(todo => {
      if (todo.id !== id) {
        return todo;
      }
    });

    this.setState(state => ({
      ...state,
      todoList: newTodoListAfterRemove
    }));
  }

  handleAddChange() {
    function getRandomId() {
      const minRandomNumber = 0;
      const maxRandomNumber = 10000;
      return Math.floor(Math.random() * (maxRandomNumber - minRandomNumber) + minRandomNumber).toString();
    }
   
    const defaultTodo = {
      id: getRandomId(),
      title: "Write here what you need to do!",
      isDone: false
    };
  
    const newTodoListAfterAdd = [ ...this.state.todoList, defaultTodo ];

    this.setState(state => ({
      ...state,
      todoList: newTodoListAfterAdd
    }));
  }

  render() {
    return (
      <div className="-app">
          <Todo 
            todoList = { this.state.todoList } 
            onDoneChange = { this.handleDoneChange }
            onRemoveChange = { this.handleRemoveChange }
            onAddChange = { this.handleAddChange }/>
      </div>
    )
  }
}

export default App;
