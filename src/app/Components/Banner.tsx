import Image from "next/image";

const Banner = () => {
  return (
    <div>

<div className="container col-xxl-8 px-4 py-5 bg-[#F2F0F1]">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">

        <Image src="/couple1.png" alt="" width={1440} height={663}/>
      </div>
      <div className="col-lg-6">
        <h1 className=" fw-bold  lh-1 mb-3 text-6xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="lead">Browse through our diverse range of meticulously crafted garments, designed <br></br>to bring out your individuality and cater to your sense of style.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
    
 <Image src="/btn.png" alt="" width={200} height={200}/>

        </div>
      </div>


  

<div className="flex flex-wrap sm:flex-nowrap sm:block md:hidden md:space-x-3 lg:space-x-6 xl:space-x-8 items-center justify-center md:justify-start md:mb-[116px]">
  <div className="flex flex-col">
    <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
      200+
    </span>
    <span className="text-xs xl:text-base text-black/60 text-nowrap">
      International Brands
    </span>
  </div>
  <div className="ml-6 md:ml-0 h-12 md:h-full bg-black/10" />
  <div className="flex flex-col ml-6 md:ml-0">
    <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
      2000+
    </span>
    <span className="text-xs xl:text-base text-black/60 text-nowrap">
      High-Quality Products
    </span>
  </div>
  <div className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10" />
  <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
    <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
      30,000+
    </span>
    <span className="text-xs xl:text-base text-black/60 text-nowrap">
      Happy Customers
    </span>
  </div>
</div>







    </div>
  </div>



<div className="container d-flex flex-wrap justify-content-center align-items-center bg-black p-3 text-white gap-32">
  <h1 className="fs-4 fs-md-3 fs-lg-2 fw-bold">VERSACE</h1>
  <h1 className="fs-4 fs-md-3 fs-lg-2 fw-bold">ZARA</h1>
  <h1 className="fs-4 fs-md-3 fs-lg-2 fw-bold">GUCCI</h1>
  <h1 className="fs-4 fs-md-3 fs-lg-2 fw-bold">PRADA</h1>
  <h1 className="fs-4 fs-md-3 fs-lg-2 fw-bold">CalvinKlein</h1>
</div>







    </div>
  )
}

export default Banner