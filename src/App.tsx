import './App.scss'
import { Contacts } from './components/Contacts/Contacts'
import { Education } from './components/Education/Education'
import { Intro } from './components/Intro/Intro'
import { Portfolio } from './components/Portfolio/Portfolio'

function Main() {
  return (
    <>
      <Intro></Intro>
      <Portfolio></Portfolio>
      <Education></Education>
      <Contacts></Contacts>
    </>
  )
}

export default Main
