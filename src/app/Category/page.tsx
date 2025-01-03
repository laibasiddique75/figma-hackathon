import React from 'react'
import { AccordionDemo } from '../Components/Accordian'
import { SliderDemo } from '../Components/Slider'
import { CheckboxDemo } from '../Components/Checkbox'
import Size from '../Components/Size'
import { DressStyle } from '../Components/DressStyle'
import Categories from '../Components/Shirts'

// import Header from '../Components/Header'
import Image from 'next/image'
// import Footer from '../Components/Footer'
const page = () => {
  return (
<>
  {/* <Header/> */}
    <main className='flex flex-col sm:flex-row justify-center items-center space-x-6'>
<div className='w-full h-ful md:w-[295px] md:h-[1200px] border rounded-[16px]'>
<AccordionDemo/>
<SliderDemo/>
<CheckboxDemo/>
<Size/>
<DressStyle/>





</div>





<div className=' w-full md:w-[900px] h-full sm:h-[1200px]'>

<Categories/>

</div>



    </main>






{/* <Footer/> */}

    </>
 
  )
}

export default page


