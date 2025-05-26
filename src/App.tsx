import './App.scss'
import myPhoto from '../public/imgs/mainProfImage.png'
import linkedin from '../public/imgs/Screenshot 2025-05-18 160435.png'
import js from '../public/imgs/js.png'
import ts from '../public/imgs/Typescript.svg.png'
import css from '../public/imgs/css.png'
import html from '../public/imgs/html.png'
import node from '../public/imgs/node.png'
import sass from '../public/imgs/sass.png'
import react from '../public/imgs/react.png'
import redux from '../public/imgs/redux.png'
import postSQL from '../public/imgs/postSQL.png'
import docker from '../public/imgs/docker.png'
import vite from '../public/imgs/vite.png'
import nothing from '../public/imgs/noth2.png'
import eco from '../public/imgs/eco2.png'
import game from '../public/imgs/2048small.png'
import gadget from '../public/imgs/niceG.png'
import heart from '../public/imgs/SHU.png'
import mate from '../public/imgs/MA.png'
import CV from '../public/CV Markiyan Dmyterko Full-Stack.pdf'

function Main() {

  return (
    <>
      <div className='intro'>
        <div className='intro-card'>
          <a target='_blank' href="https://www.linkedin.com/in/markiyan-dmyterko-bb74021b7/" className='intro-link'>
            <div className='intro-link-carusel'>
              <img className='intro-summary-stack-img' src={js} alt="JS" />
              <img className='intro-summary-stack-img' src={ts} alt="TS" />
              <img className='intro-summary-stack-img' src={css} alt="css" />
              <img className='intro-summary-stack-img' src={html} alt="html" />
              <img className='intro-summary-stack-img' src={node} alt="node" />
              <img className='intro-summary-stack-img' src={sass} alt="sass" />
              <img className='intro-summary-stack-img' src={react} alt="react" />
              <img className='intro-summary-stack-img' src={redux} alt="redux" />
              <img className='intro-summary-stack-img' src={postSQL} alt="postSQL" />
              <img className='intro-summary-stack-img' src={docker} alt="docker" />
              <img className='intro-summary-stack-img' src={vite} alt="vite" />
            </div>
            <img
              src={linkedin}
              alt="LinkedinSite"
              className='intro-link-imgBack'
            />
            <img
              src={myPhoto}
              alt="myFace"
              className='intro-link-img'
            />
          </a>

        </div>
        <div className='intro-summary'>
          <h1 className='intro-card-name'>Markiyan Dmyterko</h1>
          <h2 className='intro-card-prof'>Full-Stack Developer</h2>
          <h2>Summary</h2>
          <article className='intro-summary-text'>
            I'm a Frontend Developer skilled in <b>HTML, SCSS, BEM, JavaScript, React, Node.js, SQL, TypeScript, Redux, and Git/GitHub</b>, with an <b>Advanced level of English</b>. My experience in the USA trucking industry as a Logistic Coordinator and Dispatcher has sharpened my ability to manage complex workflows, optimize efficiency under pressure, and solve problems in high-stakes environments—skills that directly translate into building scalable and resilient web applications.
          </article>
          <a href={CV} download='CV_Markiyan_Dmyterko_FullStack.pdf'>
            <button>
              Download CV
            </button>
          </a>
        </div>
      </div>

      <div className='portfolio'>
        <h1>Portfolio</h1>
        <div className='container'>

          <div className='portfolio-box'>
            <a target="_blank" href="https://markimark3.github.io/nothing-landing/" className="portfolio-box-link">
              <img className="portfolio-box-link-img" src={nothing} alt="nothingLanding" />
            </a>
            <p className='portfolio-box-text'>Simply<br /> Nothing</p>
            <a target="_blank" className='portfolio-box-button' href="https://github.com/MarkiMark3/nothing-landing">
              <button>Repository</button>
            </a>
          </div>

          <div className='portfolio-box'>
            <a target="_blank" href="https://markimark3.github.io/eco-landing/" className="portfolio-box-link">
              <img className="portfolio-box-link-img" src={eco} alt="EcoImg" />
            </a>
            <p className='portfolio-box-text'>Eco <br />Glow</p>
            <a target="_blank" className='portfolio-box-button' href="https://github.com/MarkiMark3/eco-landing">
              <button>Repository</button>
            </a>
          </div>

          <div className='portfolio-box'>
            <a target='_blank' href="https://markimark3.github.io/game-2048/" className="portfolio-box-link">
              <img className="portfolio-box-link-img" src={game} alt="2048IMG" />
            </a>
            <p className='portfolio-box-text'>Merge<br /> Mania</p>
            <a target='_blank' className='portfolio-box-button' href="https://github.com/MarkiMark3/game-2048">
              <button>Repository</button>
            </a>
          </div>

          <div className='portfolio-box'>
            <a target='_blank' href="https://markimark3.github.io/nice-gadgets-website/#/home" className="portfolio-box-link">
              <img className="portfolio-box-link-img" src={gadget} alt="NiceGImg" />
            </a>
            <p className='portfolio-box-text'>Nice<br /> Gadgets</p>
            <a target='_blank' className='portfolio-box-button' href="https://github.com/MarkiMark3/nice-gadgets-website">
              <button  >Repository</button>
            </a>
          </div>

        </div>
      </div>

      <div className='education'>
        <h1>Education</h1>
        <div className='education-box'>
          <div className='education-box-item'>
            <img src={heart} alt="SHU" className='education-box-item-img' />
            <p className='education-box-item-text'>Sacred Heart UNIVERSITY</p>
          </div>
          <div className='education-box-item'>
            <img src={mate} alt="Mate" className='education-box-item-img' />
            <p className='education-box-item-text'>Mate Academy</p>
          </div>


        </div>
      </div>

      <div className='contact'>
        <h1>Contact</h1>
        <h2 className='contact-text'>Email: fd.markiyan.dmyterko@gmail.com</h2>
        <a href="tel:+48123456789" className='contact-text'>Phone: +48 453-300-303</a>
        <a target="_blank" href="https://github.com/MarkiMark3" className='contact-text'>GitHub</a>
        <a target="_blank" href="https://t.me/MarkiMark3" className='contact-text'>Telegram</a>
        <a target="_blank" href="https://www.linkedin.com/in/markiyan-dmyterko-bb74021b7/" className='contact-text'>Linkedin</a>
      </div>
    </>


  )
}

export default Main
