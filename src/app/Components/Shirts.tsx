import { FaStar } from "react-icons/fa";
import Image from "next/image";
interface Iproducts{

    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string
}

let product:Iproducts[]=[
    {
        title:"Gradient Graphic T-shirt",
        id:1,
        price:"$145",
        img_url:"/white1.png"
    },
    {
        title:"Polo with Tipping Details",
        id:2,
        price:"$180",
        img_url:"/pink.png"
    },

    {
        title:"Black Striped T-shirt",
        id:3,
        price:"$150",
        img_url:"/white.png"
    },
    
    {
        title:"SKINNY FIT JEANS",
        id:4,
        price:"$240",
        img_url:"/blue.png"
    },
    
    {
        title:"CHECKERED SHIRT",
        id:5,
        price:"$180",
        img_url:"/check.png"
    },
    
    {
        title:"SLEEVE STRIPED T-SHIRT",
        id:6,
        price:"$130",
        img_url:"/orange.png"
    },
    
    {
        title:"VERTICAL STRIPED SHIRT",
        id:7,
        price:"$212",
        img_url:"/green.png"
    },
    
    {
        title:"COURAGE GRAPHIC T-SHIRT",
        id:8,
        price:"$145",
        img_url:"/orange1.png"
    },
    
    {
        title:"LOOSE FIT BERMUDA SHORTS",
        id:9,
        price:"$80",
        img_url:"/pent.png"
    },
    
]

let star = [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />,]
export default function Categories(){
    return(
        <div className="w-full h-[500px]">
            <h1 className="text-3xl md:text-4xl font-bold">
            Casual
            </h1>

            <div className="flex flex-wrap flex-col md:flex-row justify-center md:justify-between items-center px-8 mt-7">
                {
                    product.map((product) => {
                        return(
<div>
   <div className="w-[230px] h-[230px] px-5 rounded-[20px]">

   <Image src={product.img_url} alt={product.title} width={100} height={100} className="w-full h-full rounded-[20px]"/>
   </div>

<div>
<p className="text-lg mt-2 font-bold ">{product.title}</p>

<p className="flex text-yellow-400">{star}</p>
<p>{product.price}</p>
</div>

</div>
                        )
                    })
                }
            </div>
            </div>
    )
}