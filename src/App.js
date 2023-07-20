import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newscomponent  from './Components/Newscomponent';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (

      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Newscomponent  apiKey ={this.apiKey} key='general' pageSize={10} country="in" category="general" />}></Route>
            <Route path="/business" element={<Newscomponent  apiKey ={this.apiKey} key='business' pageSize={10} country="in" category="business" />}></Route>
            <Route path="/entertainment" element={<Newscomponent  apiKey ={this.apiKey} key='entertainment' pageSize={10} country="in" category="entertainment" />}></Route>
            <Route path="/general" element={<Newscomponent  apiKey ={this.apiKey} pageSize={10} key='general' country="in" category="general" />}></Route>
            <Route path="/health" element={<Newscomponent  apiKey ={this.apiKey} pageSize={10} key='health' country="in" category="health" />}></Route>
            <Route path="/science" element={<Newscomponent  apiKey ={this.apiKey} pageSize={10} key='science' country="in" category="science" />}></Route>
            <Route path="/sports" element={<Newscomponent  apiKey ={this.apiKey} pageSize={10} key='sports' country="in" category="sports" />}></Route>
            <Route path="/technology" element={<Newscomponent  apiKey ={this.apiKey} pageSize={10} key='technology' country="in" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

