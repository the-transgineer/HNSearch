import React from 'react';
const result = (props) => (
    <div className="result">
        <a href={props.result.url}><p>{props.result.title}</p></a>
        <p>author: {props.result.author}</p>
        <p>points: {props.result.points}</p>
    </div>
);

export default result;