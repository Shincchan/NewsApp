import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
     totalResults:0
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e4956edefab64c11a9432ec80f28aadd&page=1&pageSize=18";
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults
    })
  }

  handleNext=async ()=>{
    
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e4956edefab64c11a9432ec80f28aadd&page=${this.state.page+1}&pageSize=18`;
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      
    })
   
  }

  handleBack= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e4956edefab64c11a9432ec80f28aadd&page=${this.state.page-1}&pageSize=18`;
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      
    })
  }

  render() {
    return (
      <>
        <h2
          style={{ textAlign: "center", fontFamily: "sans-serif" }}
          className="container my-3"
        >
          NewsGo - Top Headlines
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexGrow: "1",
            justifyContent: "center",
          }}
          className="container my-3 "
        >
          {this.state.articles.map((element) => {
            return (
              <Newsitem
                key={element.url}
                title={element.title?element.title:""}
                description={element.description?element.description:""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            );
          })}
          <div className="container" style={{textAlign:"right"}}>
          <button type="button" disabled={this.state.page<=1} onClick={this.handleBack} className="btn btn-sm btn-primary my-2 mx-3" style={{backgroundColor:"#046988"}}> &larr; Go Back</button>
          <button type="button" disabled={this.state.page+1>(Math.ceil(this.state.totalResults/18))} className="btn btn-sm btn-primary my-2 mx-3" onClick={this.handleNext} style={{backgroundColor:"#046988"}}><a href="#top" style={{textDecoration:"none",color:"white"}}>Next Page &rarr;</a></button>

          </div>
        </div>
      </>
    );
  }
}

export default News;
