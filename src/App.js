import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Newscomponent from './Components/Newscomponent';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


const App = () => {
  // getting api key from env file 
  const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Newscomponent apiKey={apiKey} key='general' pageSize={10} country="in" category="general" />}></Route>
          <Route path="/business" element={<Newscomponent apiKey={apiKey} key='business' pageSize={10} country="in" category="business" />}></Route>
          <Route path="/entertainment" element={<Newscomponent apiKey={apiKey} key='entertainment' pageSize={10} country="in" category="entertainment" />}></Route>
          <Route path="/general" element={<Newscomponent apiKey={apiKey} pageSize={10} key='general' country="in" category="general" />}></Route>
          <Route path="/health" element={<Newscomponent apiKey={apiKey} pageSize={10} key='health' country="in" category="health" />}></Route>
          <Route path="/science" element={<Newscomponent apiKey={apiKey} pageSize={10} key='science' country="in" category="science" />}></Route>
          <Route path="/sports" element={<Newscomponent apiKey={apiKey} pageSize={10} key='sports' country="in" category="sports" />}></Route>
          <Route path="/technology" element={<Newscomponent apiKey={apiKey} pageSize={10} key='technology' country="in" category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
