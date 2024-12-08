import Image from 'next/image';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const page = () => {
  return (
    <div>
      <Header/>;

      <div className='flex gap-7 container'>
        <h4>
          Home

        </h4>
        <h4>Shop</h4>
        <h4>Men</h4>
        <h4>T-Shirts</h4>
      </div>



    <div className="container mx-auto p-4 flex items-center justify-between">
 
      <div className="flex flex-col gap-4">
  
<Image src="/brown1.png" alt='' width={152} height={167}/>
<Image src="/brown2.png" alt='' width={152} height={167} />
<Image src="/brown3.png" alt='' width={152} height={167} />

      </div>

    
      <div className='mr-96'>
      <Image src="/brown.png" alt='' width={444} height={530}/>
      </div>
    </div>


<div>

  <h1 className='font-bold text-6xl'>One Life Graphic T-shirt</h1>
  <Image src="/star4.png" alt='' width={193} height={74.21}/> 

</div>



{/* 
<div>


<Image src="/brown1.png" alt='' width={152} height={167}/>
<Image src="/brown2.png" alt='' width={152} height={167} className='mt-4'/>
<Image src="/brown3.png" alt='' width={152} height={167}  className='mt-4' />

<div className='flex ml-11 '>
  <Image src="/brown.png" alt='' width={444} height={530}/>
</div>






</div> */}












      <Footer/>;
    </div>
  )
}

export default page
