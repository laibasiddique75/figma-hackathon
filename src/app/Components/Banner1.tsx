import Image from "next/image";

const Banner1 = () => {
  return (
    <div>

<div className="container mx-auto bg-[#F2F0F1] px-4 py-8">
  {/* Section Title */}
  <h1 className="fw-bold text-4xl md:text-5xl lg:text-6xl text-center mb-8">
    BROWSE BY DRESS STYLE
  </h1>

  {/* Dress Style Rows */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
    <Image
      src="/casual.png"
      alt="Casual Dress"
      width={407}
      height={289}
     
    />
    <Image
      src="/formal.png"
      alt="Formal Dress"
      width={684}
      height={289}
    
    />
    <Image
      src="/party.png"
      alt="Party Dress"
      width={684}
      height={289}
   
    />
    <Image
      src="/gym.png"
      alt="Gym Wear"
      width={407}
      height={289}
   
    />
  </div>
</div>

{/* Happy Customers Section */}
<div className="container mx-auto px-4 py-8">
  <h1 className="fw-bold text-4xl md:text-5xl lg:text-6xl text-center mb-8">
    OUR HAPPY CUSTOMERS
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <Image
      src="/sarah.png"
      alt="Sarah"
      width={350}
      height={240}
     
    />
    <Image
      src="/alex.png"
      alt="Alex"
      width={350}
      height={240}
    
    />
    <Image
      src="/james.png"
      alt="James"
      width={350}
      height={240}
     
    />
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


















    </div>
  )
}

export default Banner1