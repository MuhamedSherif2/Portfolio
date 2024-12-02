import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import './style.css'
import Home from './component/Home'
import Project from './component/Project'
import Contact from './component/Contact'
import AllProjects from './component/AllProjects'
import JavascriptProjects from './component/JavascriptProjects'
import ReactProjects from './component/ReactProjects'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />}>
          <Route path='all-projects' element={<AllProjects />} />
          <Route path='javascript-projects' element={<JavascriptProjects />} />
          <Route path='react-projects' element={<ReactProjects />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
