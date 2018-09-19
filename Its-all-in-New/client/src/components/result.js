import React from "react";

const Result = props => (
    <div className="list-group-item">         
         <p>{props.headline}</p> 
         <p>{props.description}</p> 
         <p>{props.url}</p>
         <button name="save" type="submit" onClick={props.savearticle({
             headline: props.headline,
             description: props.description,
             weburl: props.url
         })}>Save</button>
         
    </div>
);

export default Result;