import React from 'react'
import About21 from '../assets/21.png'
import Button from './Button'
function About() {
  return (
      <div className='w-[100%] h-[1081px] '>
          <div className='w-[90%] flex space-between mx-auto  mt-[10%] mb-auto '>
            <div className=' w-[50%] h-auto'>
              <img src={About21} alt="" className=' w-[60%] h-auto mx-auto mt-[30%]  ' />
          </div>
          <div className='w-[50%]'>
              <h1 className='w-[50%] text-[60px] h-[58px] leading-8 font-normal  '> About Us</h1>
              <div>
                  <h3 className=' text-[24px] h-auto w-[50%] text-[#001EDC] mt-[24px] mb-4 '>Company</h3>
                  <p className='w-[80%] text-[18px]  h-auto leading-8 font-normal'>At Sanchy Kreations, we embrace the power of change to create long-lasting value in every direction for our clients, people, and communities and we strive to continuously equip ourselves with the latest digital and technical know-how paving the way for our clients and partners to navigate the technology landscape most effectively in this ever-changing world.</p>
              
                  <h3 className=' text-[24px] h-auto w-[50%] text-[#001EDC] mt-[24px] mb-4'> Our Mission</h3>
                  <p className='w-[80%] text-[18px] h-auto leading-8 font-normal'>
                      To be a successful global information technology company trusted by its customers and partners for service excellence, caring for its employees and creating and delivering innovative and value-driven ICT products and services.

                  </p>
                  <h3 className=' text-[24px] h-auto w-[50%] text-[#001EDC] mt-[24px] mb-4'>Our Vision</h3>
                  <p className='w-[80%] text-[18px] h-auto leading-8 font-normal'>
                      To create innovative products and services to help ease the life of customers and partners

                      </p>
                      <div className="my-[88px] ">
                          
                      <Button  />
                      </div>
              </div>
          </div>
          </div>
         
    </div>
  )
}

export default About