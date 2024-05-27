import React from 'react'
import "../css/Footer.css"
import { Link } from 'react-router-dom';
import { SlSocialGithub  } from "react-icons/sl";
const Footer = () => {
  return (
    <div className='footer'>
      <br />
      <div className='social'>
        <Link to={"https://github.com/facu-arganaraz7"} target='_blank'><SlSocialGithub className='text-white'/></Link>
      </div>
      <h3>©Todos Los Derechos Reservados FRT 2024</h3>
      <br />
    </div>
  )
}

export default Footer
