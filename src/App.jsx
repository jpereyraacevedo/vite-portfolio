import './App.css'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Portfolio } from './components/Portfolio/Portfolio'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
