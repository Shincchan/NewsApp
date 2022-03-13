import React, { Component } from 'react'
import loading from "../images/loading.gif"
export default class spinner extends Component {
  render() {
    return (
        <div style={{textAlign:"center"}}>
            <img src={loading} alt="loading" />
        </div>
      
    )
  }
}
