import React from 'react'
import Inspire11 from '../assets/Inspire11.png'
import people11 from '../assets/people11.png'
function What() {
  return (
      <div className='w-[100%] h-auto'>
          <div className='w-[90%] mx-auto'>
               <h1 className='w-[80%] text-[60px] h-[58px] leading-8 font-normal  '> What we do</h1>
                  <p className='w-[60%] text-[18px] h-auto leading-8 font-normal'>We follow a consultative approach to understand your requirements first and then we put forward a suitable set of solutions accordingly.</p>
         
              <div className="flex mt-28">
                  <div className='w-[50%]'>
                      <h3 className='text-[#001EDC] text-[24px] w-[80%] h-auto leading-8 font-normal mb-4'>We invest in the future of technology mobility and data optimization.</h3>
                  
                      <p className='w-[80%] text-[18px]  h-auto leading-8 font-normal'>
                          We know the fuel that drives tech is the need for innovations and services that constantly beats and exceeds expectations. We do not shy away from investing deeply in tech trends, new technologies, and software that transcends and paves a new path for the future of digital services.
                      </p>
                      {/*  */}

                      <h3 className='text-[#001EDC] text-[24px] w-[80%] h-auto leading-8 font-normal mt-6 mb-4'>Inspire and be inspired</h3>
                  
                      <p className='w-[80%] text-[18px]  h-auto leading-8 font-normal'>
                          We're result-oriented, result-driven, passionate, collaborative
Leading by example. We aim to create an environment where everyone is thriving, happy, and enjoys their work. When giving feedback, we strive to inspire and balance encouragement with constructive criticism. We take the interests in each other’s growth, We are open-minded, flexible, and appreciate each other’s strengths.
                      </p>
                  </div>
                  <div className='w-[50%]'>
                      <img src={Inspire11} alt="/" className='w-[80%] h-auto  relative -mb-16 '/>
                  </div>
                  
              </div>
              
              <div className="flex space-between ">
                <div className='w-[50%] '>
                      <img src={people11} alt="/" className='w-[80%] h-auto ml-48  '/>
                  </div>
                  <div className='w-[50%] justify-items-end'>
                      <div className='mt-[30%]'>
                           <h3 className='text-[#001EDC] text-[24px] w-[80%] h-auto leading-8 font-normal mb-4 ml-28'> Add to the culture</h3>
                  
                      <p className='w-[80%] text-[18px]  h-auto leading-8 font-normal ml-28'>
                          We're accountable, transparent, empathetic, selfless. Our team strives to add to the growth culture in our own unique ways. We seek out a diversity of views and acknowledge that sometimes we’ll have to challenge our assumptions.

                      </p>
                      {/*  */}

                      <h3 className='text-[#001EDC] text-[24px] w-[80%] h-auto leading-8 font-normal mt-6 mb-4 ml-28'>Give trust</h3>
                  
                      <p className='w-[80%] text-[18px]  h-auto leading-8 font-normal ml-28'>
                         We're trustworthy, ethical, candid. We meet on common ground in appreciation of our different perspectives and the expertise of our team. We trust each other because we know that we are all putting our hearts into our work.
                      </p>
                      </div>
                     
                  </div>
                  
                  
             </div>
          </div>
          
    </div>
  )
}

export default What