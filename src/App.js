
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes,Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div >
        <Navbar/>  
        
        <Routes>
          <Route exact path="/" element={<News  key="general" category="general" /> }/>
         
          <Route excat path="/business" element={<News key="business" category="business" /> }/>
          <Route exact path="/sports" element={<News key="sports" category="sports" /> }/>
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" /> }/>
          <Route exact path="/science" element={<News  key="science"category="science" /> }/>
          
          <Route exact path="/health" element={<News key="health" category="health" /> }/>
          <Route exact path="/technology" element={<News key="technology" category="technology" /> }/>
          <Route exact path="/general" element={<News key="general" category="general" /> }/>


        </Routes>

      </div>
    )
  }
}

