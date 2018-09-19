import React, { Component } from "react";
import SearchForm from "./searchform";
import Results from "./results";
import SavedArticles from "./savedarticles";
import API from "../utils/API";

class Home extends Component {
constructor (props) {
  super(props);
  this.state = {
    query: "",
    startyear: "",
    endyear: "",

    results: [],
    savedArticles:[]
  };
  console.log(this.state);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  this.savearticle = this.savearticle.bind(this);
  this.deletearticle = this.deletearticle.bind(this);
}

  // When this component mounts, search the Giphy API for pictures of kittens
  componentWillMount() {
    // this.searchGiphy("kittens");
    API.getArticles()
    .then(res => {
        console.log(res.data);
        this.setState({ savedArticles: res.data});
    })
    .catch(err => console.log(err));
  }
    
//   displaySavedArticle () {
//     API.getArticles()
//     .then(res => {
//         console.log(res.data);
//         this.setState({ savedArticles: res.data});
//     })
//     .catch(err => console.log(err));
//   }

  handleInputChange = event => { 

    this.setState({
    //   query: event.target.value,
    //   startyear: event.target.value,
    //   endyear: event.target.value
    [event.target.name]:event.target.value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit =event=> {
    event.preventDefault();
    const {query, startyear, endyear} =this.state;
    console.log(query, startyear, endyear);
    API.search(query,startyear,endyear)
      .then(res => {
          console.log("fetched");
          console.log(res.data.response.docs);
          this.setState({ results: res.data.response.docs })
         })
      .catch(err => console.log(err));
  };
 
  savearticle = (param) => event =>{
      event.preventDefault();
      console.log(param);

      API.saveArticles(param)
      .then(res => {
        console.log("added");
        console.log(res);
        this.setState({
           query: "",
           startyear:"",
           endyear:""
        });
       })
    .catch(err => console.log(err));

    API.getArticles()
    .then(res => {
        console.log(res.data);
        this.setState({ savedArticles: res.data});
    })
    .catch(err => console.log(err));
  }

  deletearticle = (param) => event => {
    console.log(param);
    API.deleteArticles(param)
    .then(res => {
      console.log("deleted");
      console.log(res);
      
     })
  .catch(err => console.log(err));


  API.getArticles()
    .then(res => {
        console.log(res.data);
        this.setState({ savedArticles: res.data});
    })
    .catch(err => console.log(err));
  }

  render() {
   
    return (
      <div>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {/* <Results results={this.state.results} />*/}

        <Results results={this.state.results} savearticle={this.savearticle} />
        {/*  <SavedArticles results={this.state.savedArticles} deletearticle={this.deletearticle} />*/}
        <SavedArticles results={this.state.savedArticles} deletearticle={this.deletearticle} />
      </div>
    );
  }
}

export default Home;
