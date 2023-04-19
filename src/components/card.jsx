import React from 'react';

function Card(props){
  
    return (
      <div className="container text-center">
        <div className="card-header" style={{}}>{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div> 
    );    
  }

export default Card;