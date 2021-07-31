import React, { useState, useEffect } from 'react'
import './App.css';
import Home from "./components/Home"
import About from "./components/About.js"
import SinglePost from "./components/SinglePost"
import Post from "./components/Post"
import Project from "./components/Project"


import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from './components/NavBar';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        
      }
    }

      window.addEventListener('resize', hideMenu)

      return () => {
        window.removeEventListener('resize', hideMenu)
      }
    
  })

  return (
    <BrowserRouter>
    <NavBar toggle={toggle} isOpen={isOpen}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
