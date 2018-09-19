import React from "react";

const Article = props => (
    <div className="list-group-item">         
         <p>{props.headline}</p> 
         <p>{props.description}</p> 
         <p>{props.url}</p>
         <button name="delete" onClick={props.deletearticle({_id: props.id})}>Delete</button>
         
    </div>
);

export default Article;