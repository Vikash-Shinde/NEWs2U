import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Footers from './components/Footers'
import {
 
  Routes,
  Route

} from "react-router-dom";


export default class App extends Component {


  render() {
    return (
      <div>
       
          <Navbar />
          <Routes>
            <Route  path="/NEWS2U" element={<News country="in" category="general" />} />
            <Route  path="/" element={<News country="in" category="general" />} />
            <Route exact path="/business" element={<News key="busniess" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" country="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" country="in" category="technology" />} />
          </Routes>
          <Footers/>
       
        {/* <News  country="in" category="science" /> */}
      </div>
    )
  }
}
