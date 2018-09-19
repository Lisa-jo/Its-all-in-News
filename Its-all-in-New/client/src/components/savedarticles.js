import React from "react";
import Article from "./article";

const SavedArticles = props => (
<div className="container">
  <h1>Saved Articles </h1>
  <div className="list-group">
    {props.results.map((result,i) => (
      <Article key={i} headline = {result.headline}  url = {result.weburl} description ={result.description} deletearticle={props.deletearticle} id={result._id}/>
      
    ))}
  </div>
</div>
);

export default SavedArticles;