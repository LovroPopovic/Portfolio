import React from 'react'
import "./App.css"
import About from "./components/about/About"
import Comments from "./components/comments/Comments"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Portfolio from "./components/portfolio/Portfolio"
import Resume from "./components/resume/Resume"
import Services from "./components/services/Services"
import Sidebar from "./components/sidebar/Sidebar"






const App = () => {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <About/>
      <Resume/>
      <Services/>
      <Portfolio/>
      <Comments/>
      <Contact/>
    </main>
    </>
  );
}
export default App;