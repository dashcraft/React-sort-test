import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import _ from 'lodash';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      console.log(response);
      this.setState({
        todos: response.data
      });
    });
  }

  sort() {
    let input = document.getElementById('input').innerHTML;

    this.setState.response = _.sortBy(this.state.response, input);
  }

  render() {

    const { todos = [] } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <input id="input" type="textbox" placeholder="search from here" onKeyDown={this.sort()}></input>

          <Table responsive>
            <thead>
              <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {todos.length ?
                todos.map(todo => (
                  <tr>
                    <td>{todo.userId}</td>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td><input type="checkbox" checked={todo.completed}></input></td>
                  </tr>
                ))
                :
                (<tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>)
              }
            </tbody>
          </Table>
        </header>
      </div>
    );
  }
}

export default App;
