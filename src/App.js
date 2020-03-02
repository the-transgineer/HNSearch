import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAction } from './actions/hnActions';
import './App.css';

class App extends Component {
 constructor(props) {
     super(props);
     this.state = {
         query: ''
     }
 }
 handleChange = e => {
     this.setState({
         query: e.target.value
     });
 }

 handleClick = () => {
     this.props.searchAction(this.state.query);
 }
 render() {
  return (
   <div className="App">
    <label>Search</label>
    <input onChange={this.handleChange} type="text" value={this.state.query}/>
    <input onClick={this.handleClick} type="submit"/>
   </div>
  );
 }
}


const mapDispatchToProps = dispatch => {
    return {
        searchAction: (query) => dispatch(searchAction(query))
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(App)