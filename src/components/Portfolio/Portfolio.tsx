import './Portfolio.scss';
import nothing from '../../../public/imgs/noth2.png'
import eco from '../../../public/imgs/eco2.png'
import game from '../../../public/imgs/2048small.png'
import gadget from '../../../public/imgs/niceG.png'



export const Portfolio = () => {
  return (
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
  )
}

