import React from 'react'
import Core11 from '../assets/11.png'

function Core() {
  return (
    <div className='w-[100%] h-auto mb-20 '>
          <div className='w-[90%] flex space-between mx-auto  mt-[10%] mb-auto '>
            
          <div className='w-[50%]'>
                  <h1 className='w-[80%] text-[60px] h-[58px] leading-8 font-normal  '> Core Values</h1>
                  <p className='w-[90%] text-[18px] h-auto leading-8 font-normal'>We follow a consultative approach to understand your requirements first and then we put forward a suitable set of solutions accordingly.</p>
              
                  <div>
                  <h3 className=' text-[24px] h-auto w-[50%] text-[#001EDC] mt-[24px] mb-4 '>Accountability</h3>
                  <p className='w-[80%] text-[18px]  h-auto leading-8 font-normal'>We admit when we're wrong and move on.
 Admitting wrongs is not always easy but when we make mistakes,  we learn from them, and grow.
</p>
              
                  <h3 className=' text-[24px] h-auto w-[50%] text-[#001EDC] mt-[24px] mb-4'> Visionary</h3>
                  <p className='w-[80%] text-[18px] h-auto leading-8 font-normal'>
                      Focused on the details without losing sight of the big picture.
Every little goal achieved brings us closer to the ultimate vision we have. The ability to be in the moment and do what’s important keeps us going.



                  </p>
                  <h3 className=' text-[24px] h-auto w-[50%] text-[#001EDC] mt-[24px] mb-4'>Dedication</h3>
                  <p className='w-[80%] text-[18px] h-auto leading-8 font-normal'>
                      Dedication comes from within.
We are fully committed not to just getting things done, but to putting 100% effort and our full attention into every little detail in our work.


                      </p>
                   
              </div>
              </div>
              <div className=' w-[50%] h-auto'>
              <img src={Core11} alt="" className=' w-[60%] h-auto mx-auto mt-[30%]  ' />
          </div>
          </div>
         
    </div>
  )
}

export default Core