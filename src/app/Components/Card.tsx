import Image from "next/image";

const Card = () => {
  return (
    <div>
<h1 className='fw-bold text-6xl text-center'>NEW ARRIVALS</h1>



<div className="container mx-auto p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Product Card 1 */}
    <div className="text-center">
      <Image src="/black.png" alt="" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">T-SHIRT WITH TAPE DETAILS</h5>
      <Image src="/star1.png" alt="" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$120</h2>
    </div>

    {/* Product Card 2 */}
    <div className="text-center">
      <Image src="/blue.png" alt="" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">SKINNY FIT JEANS</h5>
      <Image src="/star3.png" alt="" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$240</h2>
    </div>

    {/* Product Card 3 */}
    <div className="text-center">
      <Image src="/check.png" alt="" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">CHECKERED SHIRT</h5>
      <Image src="/star1.png" alt="" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$180</h2>
    </div>

    {/* Product Card 4 */}
    <div className="text-center">
      <Image src="/orange.png" alt="" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">SLEEVE STRIPED T-SHIRT</h5>
      <Image src="/star1.png" alt="" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$130</h2>
    </div>
  </div>

  {/* Button */}
  <div className="flex justify-center mt-8">
    <button className="btn btn-light btn-lg px-5 rounded-full">
      View All
    </button>
  </div>
</div>




<h1 className='fw-bold text-6xl text-center'>TOP SELLING</h1>

<div className="container mx-auto p-4">
  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
    {/* Product 1 */}
    <div className="text-center">
      <Image src="/green.png" alt="Vertical Striped Shirt" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">VERTICAL STRIPED SHIRT</h5>
      <Image src="/star5.png" alt="Rating" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$120</h2>
    </div>

    {/* Product 2 */}
    <div className="text-center">
      <Image src="/orange1.png" alt="Courage Graphic T-Shirt" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">COURAGE GRAPHIC T-SHIRT</h5>
      <Image src="/star40.png" alt="Rating" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$240</h2>
    </div>

    {/* Product 3 */}
    <div className="text-center">
      <Image src="/short.png" alt="Loose Fit Bermuda Shorts" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">LOOSE FIT BERMUDA SHORTS</h5>
      <Image src="/star33.png" alt="Rating" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$180</h2>
    </div>

    {/* Product 4 */}
    <div className="text-center">
      <Image src="/pent.png" alt="Faded Skinny Jeans" width={295} height={298} />
      <h5 className="text-lg font-semibold mt-3">FADED SKINNY JEANS</h5>
      <Image src="/star4.png" alt="Rating" width={150} height={19} />
      <h2 className="text-2xl font-bold mt-2">$130</h2>
    </div>
  </div>

  {/* Button */}
  <div className="flex justify-center mt-8">
    <button className="btn btn-light btn-lg px-5 rounded-full">
      View All
    </button>
  </div>
</div>





    </div>
  )
}

export default Card









