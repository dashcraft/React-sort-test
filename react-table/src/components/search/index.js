import React, {Component} from 'react';
import { Container, Input } from 'semantic-ui-react';


export default class SearchBar extends Component {



    render(){

        return (
            <Container fluid>
                <Input id="input" loading={this.props.loading} icon={{ name: 'search', circular: true, link: true }} placeholder="search from here" onChange={this.props.onChange} />    
            </Container>
            )
        }
}