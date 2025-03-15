import React from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { ImSun } from 'react-icons/im'
import { BsFillMoonFill } from 'react-icons/bs'

function Navbar() {
  const [navstate , setnavstate]=useState(false)
  return (
    <div className='brand-container'>
      <div className='brand'></div>
      
    </div>
  )
}

export default Navbar
