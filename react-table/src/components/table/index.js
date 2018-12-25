import React, { PureComponent } from 'react';

import { Table, Segment, Image, Checkbox} from 'semantic-ui-react';

export default class SortedTable extends PureComponent{


    render(){
    const { todos, loading  } = this.props; 

    if(loading){
        return <Segment loading style={{height:'90vh'}}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
    }
    return ( 
    <Table responsive color={'olive'}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User ID</Table.HeaderCell>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Completed</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {todos.length > 1 &&
            todos.map(todo => (
              <Table.Row>
                <Table.Cell>{todo.userId}</Table.Cell>
                <Table.Cell>{todo.id}</Table.Cell>
                <Table.Cell>{todo.title}</Table.Cell>
                <Table.Cell><Checkbox defaultChecked={todo.completed} disabled={todo.completed}/></Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
        
      </Table>)
      }
}