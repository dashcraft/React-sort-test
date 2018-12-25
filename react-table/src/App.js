import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SortedTable from './components/table';
import SearchBar from './components/search';
import { Container } from 'semantic-ui-react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({tableLoading : true});
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      console.log(response);
      this.setState({
        todos: response.data,
        tableLoading: false
      });
    });
  }

  _triggerSearch= (e, { value }) =>{
    this.setState({loading:true});
    setTimeout(()=>{
      this.setState({ filter: value, loading: false })

    } , 500)
   
  }

  render() {

    const { todos, filter, loading, tableLoading } = this.state;
    let tableData = todos;
    if(filter){
      tableData = todos.filter((item)=>{
        return item.title.replace(" ","").includes(filter);
      })
    }
    return (
      <Container fluid className="App">
          <SearchBar loading={loading} onChange={this._triggerSearch}/>
          <SortedTable todos={tableData} loading={tableLoading}/>
         
      </Container>
    );
  }
}

export default App;
