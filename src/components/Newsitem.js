import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
      let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div > 
         
        <div className="card my-3" style={{width: "18rem",margin:"40px"}}>
        <img src={imageUrl?imageUrl:"https://media.istockphoto.com/photos/green-lawn-at-hill-at-sunrise-picture-id1294990080?b=1&k=20&m=1294990080&s=170667a&w=0&h=-VYbhmVtOU1u6wx03JJwhiQjTc3N4IhddyvQliHs5sM="} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <hr></hr>

            <p className="card-text">{description}..</p>
            <p className="card-text"><small class="text-muted">By {author?author:"Unkown"} on {date?new Date(date).toGMTString():"..."}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm  btn-primary" style={{backgroundColor:"#046988"}}>Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem