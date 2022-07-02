import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='fondo'>
      <div className>
      <button className='button'><Link to='/home'>Home</Link> </button>
      </div>
      <h1 className='titulo-detail'>About me!</h1>
      <div className='containerCv'> 
      <p className='titulo-rating'><strong>Hi!, my name is Nicolas and this project was made with the PERN stack </strong></p>
      <br/>
      <p className='titulo-rating'><strong>contact me!</strong></p>
      <br/>
      <br/>
      <div className='img-center'>
        
      <a 
            rel='noreferrer'
            href='https://www.linkedin.com/in/nicolaspavonprograma/'
            target="_blank"
            
            >
            <img alt="linkedin" src='https://raw.githubusercontent.com/jaider012/video-games-Pi/main/client/src/img/linkedinLOGO.png' width='100px' height='100px'/>
          </a>
          <a
            rel='noreferrer'
            href='https://github.com/NicoPavon'
            target="_blank"
            
            >
            <img alt="github" src='https://cdn-icons-png.flaticon.com/512/5968/5968866.png' width='100px' height='100px'/>
          </a>
            </div>

      </div>
    </div>
  
  )
}

export default About