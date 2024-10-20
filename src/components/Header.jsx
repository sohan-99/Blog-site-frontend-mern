import React from 'react'
import { images } from "../constants";
function Header() {
  return (
    <section >
      <header >
        <div>
          <img className="w-16" src={images.Logo} alt="logo" />
        </div>
        <div>
          
        </div>
      </header>
    </section>
  )
}

export default Header