import React from "react";

const SearchForm = props => (
    <div className="container"> 
         
           <h1>Search</h1>
           <form>
             <div className="form-group">
                <p>Topic</p>       
                <input
                type="text"               
                name="query"
                className="form-control"
                value={props.query}
                onChange={props.handleInputChange}
              
                />
                <p>Start Year</p>
                <input
                type="number"               
                name="startyear"
                className="form-control"
                value={props.startyear}
                onChange={props.handleInputChange}
                
                />
                <p>End Year</p>
                <input
                type="number"               
                name="endyear"
                className="form-control"
                value={props.endyear} 
                onChange={props.handleInputChange}
                
                />
                <button onClick={props.handleFormSubmit}>Submit</button>
            </div>
      </form>
           <p>Search for and annotate articles of interest!</p>
         
    </div>


);

export default SearchForm;