import Image from "next/image";

const Footer = () => {
  return (
    <div>



<div className=" bg-[#F0F0F0]">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-6 py-5 my-5 border-top justify-center">


    <div className="col mb-3 text-black" >
      <h5>SHOP.CO</h5>
      <ul className="nav flex-column">

        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">We have clothes that suits your style and <br></br>which you’re proud to wear. From <br></br>women to men.</a></li>

        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0  text-black"></a><Image  src="/social.png" alt="" width={148} height={28} /></li>
      </ul>
    </div>





    <div className="col mb-3 text-black">
      <h5>COMPANY</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0  text-black">About</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Work</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Career</a></li>
      </ul>
    </div>

    <div className="col mb-3 text-black">
      <h5>HELP</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black ">Customer Support</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Delivery Details</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black ">Terms & Conditions</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black ">Privacy Policy</a></li>
     
      </ul>
    </div>

    <div className="col mb-3  text-black">
      <h5>FAQ</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0   text-black">Account</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0   text-black">Manage & Delieveries</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0  text-black">Orders</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0   text-black">Payments</a></li>
      
      </ul>
    </div>

    <div className="col mb-3  text-black">
      <h5>RESOURCES </h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0   text-black">Free eBooks</a> </li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0   text-black">Development Tutorial</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0  text-black">How To-Blog</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0  text-black">Youtube Playlist</a></li>
        
      
      </ul>
    
    </div>
  


  </footer>





<div className=" text-black flex flex-col md:flex-row justify-between items-center py-4">
  <p className=" text-center md:text-left mb-4 md:mb-0 pl-24">
    Shop.co © 2000-2024, All Rights Reserved
  </p>

  <Image
    src="/btns.png"
    alt="Buttons"
    width={281.07}
    height={30.03}
className="mr-20"
  />
</div>





  
</div>

    </div>
  )
}

export default Footer