import Image from 'next/image';
import Header from '../Components/Header'
import Footer from '../Components/Footer';

const page = () => {
  return (
    <div>
      <Header/>

      <div className="container mx-auto p-4">
  {/* Breadcrumbs */}
  <div className="flex gap-3 text-sm md:text-base mb-4">
    <h4>Home</h4>
    <h4>Cart</h4>
   
  </div>


<div className="container px-4 py-5" id="hanging-icons">
  <h2 className="pb-2 border-bottom font-bold text-4xl">YOUR CART</h2>

  <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8 mt-5">
    {/* Cart Items Section */}
    <div className="flex flex-col gap-6 lg:w-2/3">
      <div className="flex items-start gap-4">
        <Image src="/white1.png" alt="" width={124} height={124} />
        <div>
          <h3 className="font-bold text-2xl">Gradient Graphic T-shirt</h3>
          <p>Size: Large</p>
          <p>Color: White</p>
          <div className="flex justify-between items-center">
            <h1 className="font-bold">$145</h1>
            <button
              type="button"
              className="btn btn-light rounded-pill px-4 py-3 w-[150px]"
            >
              - 1 +
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Image src="/check.png" alt="" width={124} height={124} />
        <div>
          <h3 className="font-bold text-2xl">CHECKERED SHIRT</h3>
          <p>Size: Medium</p>
          <p>Color: Red</p>
          <div className="flex justify-between items-center">
            <h1 className="font-bold">$180</h1>
            <button
              type="button"
              className="btn btn-light rounded-pill px-4 py-3 w-[150px]"
            >
              - 1 +
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Image src="/blue.png" alt="" width={124} height={124} />
        <div>
          <h3 className="font-bold text-2xl">SKINNY FIT JEANS</h3>
          <p>Size: Large</p>
          <p>Color: Blue</p>
          <div className="flex justify-between items-center">
            <h1 className="font-bold">$240</h1>
            <button
              type="button"
              className="btn btn-light rounded-pill px-4 py-3 w-[150px]"
            >
              - 1 +
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Order Summary Section */}
    <div className="flex flex-col gap-6 lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="font-bold text-xl">ORDER SUMMARY</h1>

      <div className="flex justify-between">
        <p>Subtotal</p>
        <h2 className="font-bold">$565</h2>
      </div>

      <div className="flex justify-between">
        <p>Discount (-20%)</p>
        <h2 className="text-red-500 font-bold">-$113</h2>
      </div>

      <div className="flex justify-between">
        <p>Delivery</p>
        <h2 className="font-bold">$15</h2>
      </div>

      <div className="flex justify-between">
        <p>Total</p>
        <h2 className="font-bold">$467</h2>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Add Promo Code"
          className="rounded-pill text-center"
        />
        <button
          type="button"
          className="btn btn-dark rounded-pill "
        >
          Apply Now
        </button>
      </div>

      <div>
        <button
          type="button"
          className="btn btn-dark rounded-pill px-8 py-3 w-full"
        >
          Go To Check Out
        </button>
      </div>
    </div>
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
