import React from 'react'
import Logo2 from '../assets/Logo2.png'
// import {AiOutlineMail, } from 'react-icons/ai'
// import { } from 'react-icons/fa'
// import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Footer() {
  return (
      <div className='w-[100%] foot  h-[200px] text-white'>
          <div className="flex w-[90%] mx-auto">
              <div className='w-[50%] flex gap-x-3'>
                  <div className='w-[50%]'>
                      
                  <img src={Logo2} alt="" className='w-[40%] h-auto'/>
                  </div>
                
                  <ul className='w-[50%]'>
                      <li>
                          
                      </li>
                      <li>2</li>
                      <li>3</li>
                      
                  </ul>
              </div>
              <div className='w-[50%] flex'>
                  <div>
                      
                  <ul>
                      <li>About</li>
                      <li>company</li>
                      <li>Approach</li>
                      <li>Core values</li>
                  </ul>
                  </div>
                  <div>
                      <h4>follow us</h4>

                  </div>
              </div>
          </div>

          <div>
              <h4>
                  Copyright © 2020. Sanchytechnology. All rights reserved.
              </h4>
          </div>
          
    </div>
  )
}

export default Footer