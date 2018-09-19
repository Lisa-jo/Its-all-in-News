import React from "react";
import Result from "./result";

const Results = props => (
<div className = "container">
  <div className="list-group">
    {props.results.map((result, i) => 
      <Result key={i} headline = {result.headline.main}  url = {result.web_url} description ={result.snippet} savearticle={props.savearticle}/>
    //   {/* */}
    )}
  </div>
</div>
);

export default Results;
