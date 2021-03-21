import React from 'react';


const Card1 = (props)=>{
    return (
        <div >
            <div className ="card">
            <h1>{props.name}</h1>
            <img src = {props.img} className ="image"></img>
            <h3 className ="container">{props.Thought}.</h3>
            </div>
          
        </div>

    );
}
export default Card1
