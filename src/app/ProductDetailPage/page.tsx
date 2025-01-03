import Image from 'next/image';
import Footer from '../Components/Footer';
// import Header from '../Components/Header';

const page = () => {
  return (
    <div>

      {/* <Header/> */}


<div className="container mx-auto p-4">
  {/* Breadcrumbs */}
  <div className="flex gap-3 text-sm md:text-base mb-4">
    <h4>Home</h4>
    <h4>Shop</h4>
    <h4>Men</h4>
    <h4>T-Shirts</h4>
  </div>

  {/* Main Content */}
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Left Column: Small Images */}
    <div className="flex flex-col items-center gap-6">
      <Image src="/brown1.png" alt="" width={152} height={167} />
      <Image src="/brown2.png" alt="" width={152} height={167} />
      <Image src="/brown3.png" alt="" width={152} height={167} />
    </div>

    {/* Middle Column: Large Image */}
    <div className="flex justify-center lg:pl-10">
      <Image src="/brown.png" alt="" width={444} height={530} />
    </div>

    {/* Right Column: Product Details */}
    <div className="flex flex-col flex-1">
      <h1 className="font-bold text-2xl md:text-4xl text-center lg:text-left">
        One Life Graphic T-shirt
      </h1>
      <div className="flex justify-center lg:justify-start my-4">
        <Image src="/star4.png" alt="" width={193} height={74.21} />
      </div>
      <div className="font-bold text-lg md:text-xl">
        $260{" "}
        <span className="text-gray-500 line-through">$300</span>
        <button className="bg-pink-200 rounded-full text-red-600 w-20 h-8 ml-4">
          -40%
        </button>
      </div>

      <p className="mt-4 text-center lg:text-left">
        This graphic t-shirt is perfect for any occasion. Crafted from a soft
        and breathable fabric, it offers superior comfort and style.
      </p>

      {/* Colors */}
      <p className="mt-4">Select Colors</p>
      <div className="flex justify-center lg:justify-start mt-2">
        <Image src="/colors.png" alt="" width={143} height={37} />
      </div>

      {/* Size Options */}
      <div className="flex justify-center lg:justify-start mt-4">
        <Image src="/small.png" alt="" width={420} height={46} />
      </div>

      {/* Quantity and Buttons */}
    
<div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
  <button
    type="button"
    className="btn btn-light  px-12 py-28 sm:w-auto rounded-pill"
  >
    - 1 +
  </button>
  <button
    type="button"
    className="btn btn-dark  px-12 py-32 sm:w-auto rounded-pill"
  >
    Add to Cart
  </button>
</div>


    </div>
  </div>
</div>


<div className='flex justify-around'>

  <h4>Product Details</h4> <h4 className="relative after:content-[''] after:block after:h-[2px] after:bg-black after:w-full after:mt-1">
  Rating & Reviews
</h4>
 <h4>FAQS</h4>
</div>


<div className="flex flex-col sm:flex-row container items-center justify-between mt-7 gap-4">
  <h3 className="font-bold text-center sm:text-left">All Reviews (451)</h3>
  <Image src="/latest.png" alt="" width={354} height={48} className="w-full sm:w-auto" />
</div>



{/* <div className='container flex justify-between mt-7'>

  <Image src="/card7.png" alt='' width={500} height={241.58}/>
  <Image src="/card6.png" alt='' width={500} height={241.58}/>
</div>


<div className='container flex justify-between mt-7'>

  <Image src="/card4.png" alt='' width={500} height={241.58}/>
  <Image src="/card3.png" alt='' width={500} height={241.58}/>
</div>

<div className='container flex justify-between mt-7'>

  <Image src="/card2.png" alt='' width={500} height={241.58}/>
  <Image src="/card1.png" alt='' width={500} height={241.58}/>
</div> */}




<div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
  <Image
    src="/card7.png"
    alt=""
    width={500}
    height={241.58}
    className="w-full h-auto"
  />
  <Image
    src="/card6.png"
    alt=""
    width={500}
    height={241.58}
    className="w-full h-auto"
  />
</div>

<div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
  <Image
    src="/card4.png"
    alt=""
    width={500}
    height={241.58}
    className="w-full h-auto"
  />
  <Image
    src="/card3.png"
    alt=""
    width={500}
    height={241.58}
    className="w-full h-auto"
  />
</div>

<div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
  <Image
    src="/card2.png"
    alt=""
    width={500}
    height={241.58}
    className="w-full h-auto"
  />
  <Image
    src="/card1.png"
    alt=""
    width={500}
    height={241.58}
    className="w-full h-auto"
  />
</div>













<div className='flex justify-center'>
<button type="button" className="btn btn-light mt-7 rounded-pill">Load More Reviews</button>
</div>




<h1 className='fw-bold text-6xl text-center'>NEW ARRIVALS</h1>



<div className="container mx-auto p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Product Card 1 */}
    <div className="text-center">
      <Image src="/blue1.png" alt="" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">Polo with Contrast Trims</h5>
      <Image src="/star1.png" alt="" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$120</h2>
    </div>

    {/* Product Card 2 */}
    <div className="text-center">
      <Image src="/white1.png" alt="" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">Gradient Graphic T-shirt</h5>
      <Image src="/star3.png" alt="" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$240</h2>
    </div>

    {/* Product Card 3 */}
    <div className="text-center">
      <Image src="/pink.png" alt="" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">Polo with Tipping Details</h5>
      <Image src="/star1.png" alt="" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$180</h2>
    </div>

    {/* Product Card 4 */}
    <div className="text-center">
      <Image src="/white.png" alt="" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">Black Striped T-shirt</h5>
      <Image src="/star1.png" alt="" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$130</h2>
    </div>
  </div>

  

</div>




<div className="container bg-black flex flex-col md:flex-row items-center md:items-start justify-between px-6 py-10">
  {/* Left Side with Centered Text */}
  <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
    <h1 className="text-2xl md:text-5xl font-bold mb-4 text-white">
    STAY UPTO DATE ABOUT OUR LATEST OFFERS
    </h1>
   
  </div>

  {/* Right Side with Email Input and Button */}
  <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center md:items-end">
    <div className="relative mb-4 w-full max-w-[400px]">
      <input
        type="email"
        placeholder="Enter Your Email Address"
        className="rounded-lg p-3 pl-12 pr-3 w-full text-black rounded-pill text-center"
      />
      <Image
        src="/mail.png"
        alt="Mail Icon"
        width={24}
        height={24}
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
      />
    </div>
    <button
      type="button"
      className="btn btn-light w-full max-w-[400px] p-3 rounded-lg text-black rounded-pill hover:bg-blue-700"
    >
      Subscribe to Newsletter
    </button>
  </div>
</div>








      <Footer/>
    </div>
  )
}

export default page
