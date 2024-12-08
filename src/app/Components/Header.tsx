"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>

<div className="d-flex align-items-center justify-content-between bg-black ">
  <p className="text-center text-white flex-grow-1 mb-0">
  Sign up and get 20% off to your first order. Sign Up Now
  </p>
  <Image src="/cross.png" alt="" width={20} height={20} className="me-5" />
</div>



    <header className="p-3 bg-white shadow ">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          {/* Logo or Title */}
          <h1 className="fs-4 me-3">SHOP.CO</h1>

          {/* Hamburger Menu Icon */}
          <button
            className="d-lg-none border-0 bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src="/menu.png" alt="Menu Icon" width={32} height={32} />
          </button>

          {/* Navigation Menu */}
          <ul
            className={`nav col-12 col-lg-auto mb-2 mb-lg-0 gap-3 flex-column flex-lg-row ${
              isMenuOpen ? "d-flex" : "d-none"
            } d-lg-flex`}
          >
            <li>
              <a href="#" className="nav-link px-2 text-black">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-black">
                On Sale
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-black">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-black">
                Brands
              </a>
            </li>
            

            <Link href="/ProductDetailPage" className="mt-2 text-black">Product Detail Page</Link>
         


            <Link href="/Cart" className="mt-2 text-black">Cart</Link>
          </ul>

          {/* Search Bar */}
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-none d-lg-flex"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark rounded-pill"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {/* Icons */}
          <div className="d-flex align-items-center">
            <Image src="/cart.png" alt="Cart Icon" width={32} height={32} />
          </div>
        </div>
      </div>
    </header>






    </div>
  )
}

export default Header