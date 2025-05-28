import './Contacts.scss'

export const Contacts = () => {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <h2 className='contact-text'>Email: fd.markiyan.dmyterko@gmail.com</h2>
      <a href="tel:+48123456789" className='contact-text'>Phone: +48 453-300-303</a>
      <a target="_blank" href="https://github.com/MarkiMark3" className='contact-text'>GitHub</a>
      <a target="_blank" href="https://t.me/MarkiMark3" className='contact-text'>Telegram</a>
      <a target="_blank" href="https://www.linkedin.com/in/markiyan-dmyterko-bb74021b7/" className='contact-text'>Linkedin</a>
    </div>
  )
}
