import './intro.scss';
import myPhoto from '../../../public/imgs/mainProfImage.png'
import linkedin from '../../../public/imgs/Screenshot 2025-05-18 160435.png'
import js from '../../../public/imgs/js.png'
import ts from '../../../public/imgs/Typescript.svg.png'
import css from '../../../public/imgs/css.png'
import html from '../../../public/imgs/html.png'
import node from '../../../public/imgs/node.png'
import sass from '../../../public/imgs/sass.png'
import react from '../../../public/imgs/react.png'
import redux from '../../../public/imgs/redux.png'
import postSQL from '../../../public/imgs/postSQL.png'
import docker from '../../../public/imgs/docker.png'
import vite from '../../../public/imgs/vite.png'

import CV from '../../../public/CV Markiyan Dmyterko Full-Stack.pdf'

export const Intro = () => {
  return (
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
            src={myPhoto}
            alt="myFace"
            className='intro-link-img'
          />

          <img
            src={linkedin}
            alt="LinkedinSite"
            className='intro-link-imgBack'
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
        <a href={CV} className='buttonLink buttonLink--last' download='CV_Markiyan_Dmyterko_FullStack.pdf'>
          <button className='buttonLink-button'>
            Download CV
          </button>
        </a>
      </div>
    </div>
  )
}
