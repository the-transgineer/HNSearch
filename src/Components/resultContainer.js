import React, { Component } from 'react';
import Result from './result';
import { connect } from 'react-redux';

class resultsContainer extends Component {
    render() {
        console.log(this);
        return (
            <div>
                {this.props.results && this.props.results.map( (r, i) => (
                    <Result key={i} result={r}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state: state.hnReducer
})

export default connect(mapStateToProps)(resultsContainer);