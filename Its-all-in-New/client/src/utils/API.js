import axios from "axios";
// import $ from 'jquery';

// let BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "e88262a6636844dab3a6290bc470a5c1";
// let BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=1&sort=newest&api-key="+APIKEY;

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query, startyear, endyear) {
    const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&begin_date="+startyear+"0101&end_date="+endyear+"1230&page=1&sort=newest&api-key="+APIKEY;
    // BASEURL += '?' + $.param({
    //     'api-key': APIKEY,
    //     'q': query,
    //     'page': "1",
    //     'begin_date': startyear+"0101",
    //     'end_date': endyear+"1230",
    //     'sort': "newest"
    //   });
      console.log(BASEURL);
    return axios.get(BASEURL);
  },

  getArticles: function () {
    return axios.get("/api");
  },

  deleteArticles: function (data) {
    console.log(data._id);
    return axios.delete("/api/"+data._id, data);
  },

  saveArticles: function (data) {
    return axios.post("/api",  data );
  }
};





// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });
