import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAction } from './actions/hnActions';
import './App.css';

class App extends Component {
 render() {
  return (
   <div className="App">
    <label>Search</label>
    <input type="text"/>
    <input onClick={this.props.searchAction} type="submit"/>
   </div>
  );
 }
}


const mapDispatchToProps = dispatch => {
    return {
        searchAction: () => dispatch(searchAction())
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(App)