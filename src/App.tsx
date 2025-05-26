import './App.scss'

function Main() {

  return (
    <>
      <div className='intro'>
        <div className='intro-card'>
          <a href="https://www.linkedin.com/in/markiyan-dmyterko-bb74021b7/" className='intro-link'>
            <div className='intro-link-carusel'>
              <img className='intro-summary-stack-img' src="/public/js.png" alt="JS" />
              <img className='intro-summary-stack-img' src="/public/Typescript.svg.png" alt="TS" />
              <img className='intro-summary-stack-img' src="/public/css.png" alt="" />
              <img className='intro-summary-stack-img' src="/public/html.png" alt="" />
              <img className='intro-summary-stack-img' src="/public/node.png" alt="" />
              <img className='intro-summary-stack-img' src="/public/sass.png" alt="" />
              <img className='intro-summary-stack-img' src="/public/react.png" alt="" />
              <img className='intro-summary-stack-img' src="/public/redux.png" alt="" />
              <img className='intro-summary-stack-img' src="/public/postSQL.png" alt="" />
              <img className='intro-summary-stack-img' src="/public/docker.png" alt="" />
              <img className='intro-summary-stack-img' src="/public/vite.png" alt="" />
            </div>
            <img
              src="/Screenshot 2025-05-18 160435.png"
              alt="LinkedinSite"
              className='intro-link-imgBack'
            />
            <img
              src="/mainProfImage.png"
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
          <a href="/public/CV Markiyan Dmyterko Full-Stack.pdf" download='CV_Markiyan_Dmyterko_FullStack.pdf'>
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
              <img className="portfolio-box-link-img" src="/public/noth2.png" alt="nothingLanding" />
            </a>
            <p className='portfolio-box-text'>Simply<br /> Nothing</p>
            <a target="_blank" className='portfolio-box-button' href="https://github.com/MarkiMark3/nothing-landing">
              <button>Repository</button>
            </a>
          </div>

          <div className='portfolio-box'>
            <a target="_blank" href="https://markimark3.github.io/eco-landing/" className="portfolio-box-link">
              <img className="portfolio-box-link-img" src="/public/eco2.png" alt="EcoImg" />
            </a>
            <p className='portfolio-box-text'>Eco <br />Glow</p>
            <a target="_blank" className='portfolio-box-button' href="https://github.com/MarkiMark3/eco-landing">
              <button>Repository</button>
            </a>
          </div>

          <div className='portfolio-box'>
            <a target='_blank' href="https://markimark3.github.io/game-2048/" className="portfolio-box-link">
              <img className="portfolio-box-link-img" src="/public/2048small.png" alt="2048IMG" />
            </a>
            <p className='portfolio-box-text'>Merge<br /> Mania</p>
            <a target='_blank' className='portfolio-box-button' href="https://github.com/MarkiMark3/game-2048">
              <button>Repository</button>
            </a>
          </div>

          <div className='portfolio-box'>
            <a target='_blank' href="https://markimark3.github.io/nice-gadgets-website/#/home" className="portfolio-box-link">
              <img className="portfolio-box-link-img" src="/public/niceG.png" alt="NiceGImg" />
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
            <img src="/public/SHU.png" alt="SHU" className='education-box-item-img' />
            <p className='education-box-item-text'>Sacred Heart UNIVERSITY</p>
          </div>
          <div className='education-box-item'>
            <img src="/public/MA.png" alt="Mate" className='education-box-item-img' />
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
