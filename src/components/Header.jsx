import React from 'react'
import icon from '../images/Troll Face.png'

function Header() {
  return (
    <nav className='navbar'>
        <img src={icon} className='icon'/>
        <h2 className='icon-text'>Meme Generator</h2>
        <h4 className='icon-subtext'>Abalogu New Project</h4>
    </nav>
  )
}

export default Header