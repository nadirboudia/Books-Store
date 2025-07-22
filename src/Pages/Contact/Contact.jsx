import './Contact.css'

function Contact() {
  return (
    <div className='contact'>

    <div className='contact-first-content'>

    <div className="icons1">
    <i className='bi bi-house-fill'></i>
    <h2>Adress</h2>
   <p> Algeria-Saida-Morchid</p>
    </div>
    
    <div className="icons2">
    <i className='bi bi-telephone-fill'></i>
    <h2>Phone</h2>
  <p>0563439477</p>
    </div>
    
    <div className="icons3">
    <i className='bi bi-envelope-fill'></i>
    <h2>Email</h2>
    <p>
        nadirboudia50@gmail.com
    </p>
    </div>

    </div>

    <form  onSubmit={(e) => e.preventDefault()} className='form-contact'>
      <h2>Contact Us From </h2>

      <div className='firstinput'>
        <input type="text" className="form-content-info"  placeholder='Name *'/>
        <input type="text" className="form-content-info" placeholder='Email *' />
        <input type="text" className="form-content-info" placeholder='Subject *'/>
      </div>
      <div className='secondinput'>
        <textarea type="text" placeholder='Your Message *' />
      </div>
      <div className='third'>
        <button className='bn'>
        Send
      </button>
      </div>






      
    </form>



























    </div>
  )
}

export default Contact
