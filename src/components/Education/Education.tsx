import './Education.scss';
import heart from '../../../public/imgs/SHU.png'
import mate from '../../../public/imgs/MA.png'


export const Education = () => {
  return (
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
  )
}