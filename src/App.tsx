import './App.scss'
import { Contacts } from './components/Contacts/Contacts'
import { Education } from './components/Education/Education'
import { Intro } from './components/Intro/Intro'
// import { Portfolio } from './components/Portfolio/Portfolio'
import nothing from '../public/imgs/noth2.png'
import eco from '../public/imgs/eco2.png'
import game from '../public/imgs/2048small.png'
import gadget from '../public/imgs/niceG.png'

function Main() {
  return (
    <>
      <Intro></Intro>
      {/* <Portfolio></Portfolio> */}

      <div className='porfolio'>
        <h1>Portfolio</h1>
        <section className='portfolio-container'>
          <div className='portfolio-sum'>
            <h2 className='portfolio-sum-title'>Simply Nothing</h2>
            <p className='portfolio-sum-text'>The Nothing Landing page is a project that focuses on structure and efficient front-end development;</p>
            <div className='portfolio-sum-stack'>
              <li>Responsive designe</li>
              <li>Animated Icons</li>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Stylint</li>
            </div>
            <a target="_blank" className='portfolio-sum-button' href="https://github.com/MarkiMark3/nothing-landing">
              <button>Repository</button>
            </a>
            <a target="_blank" className='portfolio-sum-button' href="https://www.figma.com/design/DtkQmQ797hk0nI4KfMi2Uq/BOSE-New-Version?node-id=6802-139&p=f">
              <button>Mockup</button>
            </a>
          </div>

          <div className='portfolio-site'>
            <a target="_blank" href="https://markimark3.github.io/nothing-landing/" className="portfolio-site-link">
              <img className="portfolio-site-link-img" src={nothing} alt="nothingLanding" />
            </a>
          </div>

        </section>

        <section className='portfolio-container'>
          <div className='portfolio-sum portfolio-sum--mirror'>
            <h2 className='portfolio-sum-title'>Eco Glow</h2>
            <p className='portfolio-sum-tex'>The Eco-cosmetics page is a project that focuses on simple yet captivating front-end development and responsive design.</p>
            <div className='portfolio-sum-stack'>
              <li>Responsive designe</li>
              <li>Animated Icons</li>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Stylint</li>
            </div>
            <a target="_blank" className='portfolio-sum-button' href="https://github.com/MarkiMark3/eco-landing">
              <button>Repository</button>
            </a>
            <a target="_blank" className='portfolio-sum-button' href="https://www.figma.com/design/Fz588JKGuPS2Bk21De4KE5/Brand-of-eco-cosmetics-_FE-students">
              <button>Mockup</button>
            </a>
          </div>

          <div className='portfolio-site portfolio-site--mirror'>
            <a target="_blank" href="https://markimark3.github.io/eco-landing/" className="portfolio-site-link">
              <img className="portfolio-site-link-img" src={eco} alt="nothingLanding" />
            </a>
          </div>

        </section>

        <section className='portfolio-container'>
          <div className='portfolio-sum'>
            <h2 className='portfolio-sum-title'>Merge Mania</h2>
            <p className='portfolio-sum-tex'>This project is my attempt to recreate the well-known game called 2048 using my knowledge of JavaScript and HTML/CSS.</p>
            <div className='portfolio-sum-stack'>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Stylint</li>
            </div>
            <a target="_blank" className='portfolio-sum-button' href="https://github.com/MarkiMark3/game-2048">
              <button>Repository</button>
            </a>
          </div>

          <div className='portfolio-site'>
            <a target="_blank" href="https://markimark3.github.io/game-2048/" className="portfolio-site-link">
              <img className="portfolio-site-link-img" src={game} alt="nothingLanding" />
            </a>
          </div>

        </section>

        <section className='portfolio-container'>
          <div className='portfolio-sum portfolio-sum--mirror'>
            <h2 className='portfolio-sum-title'>Nice Gadgets</h2>
            <p className='portfolio-sum-tex'>The Nice Gadget website is a personal endeavor to create an engaging online platform. The project highlights skills in modern web development, emphasizing responsive design and user experience.</p>
            <div className='portfolio-sum-stack'>
              <li>Responsive designe</li>
              <li>React</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Stylint</li>
            </div>
            <a target="_blank" className='portfolio-sum-button' href="https://github.com/MarkiMark3/nice-gadgets-website/#/home">
              <button>Repository</button>
            </a>
            <a target="_blank" className='portfolio-sum-button' href="https://www.figma.com/design/FRxncC4lfyhs6og1L6FGEU/Phone-catalog--V2--Rounded-Style-2?node-id=2-161">
              <button>Mockup</button>
            </a>
          </div>

          <div className='portfolio-site portfolio-site--mirror'>
            <a target="_blank" href="https://markimark3.github.io/nice-gadgets-website/" className="portfolio-site-link">
              <img className="portfolio-site-link-img" src={gadget} alt="nothingLanding" />
            </a>
          </div>

        </section>

      </div>
      <Education></Education>
      <Contacts></Contacts>
    </>
  )
}

export default Main
