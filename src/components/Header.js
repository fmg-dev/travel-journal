import React from 'react'
import Logo from '../img/logo.png'
export const Header = () => {
  return (
    <div>
        <header className='header'>
            <nav className='nav'>
                <img className='logo' src={Logo} alt="Logo" />
                <p className='logo-p'>fmg.dev travel journal.</p>
            </nav>
        </header>
    </div>
  )
}
