import React from 'react'
import { useState ,useEffect } from 'react'

const UseEffect_API_Card = () => {
  const [UserCard , SetCard]  = useState([])


  useEffect(()=>{
    
    const product = [{
        _id: 1,
        title: "cargo ",
        isNew: true,
        oldPrice: "2500",
        price: 1500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/a7/52/33/a752331698ff5d1eeb79a68d77f1ef01.jpg",
        rating: 4
      },
      {
        _id: 2,
        title: "hoodie",
        isNew: true,
        oldPrice: "3000",
        price: 1500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/0e/fd/bc/0efdbc4be8243ef7d0c6907a442ddacb.jpg",
        rating: 3
      },
      {
        _id: 3,
        title: "Shoose",
        isNew: true,
        oldPrice: "7000",
        price: 3000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/15/58/46/15584640db91b67d0fb533aac0363c36.jpg",
        rating: 3
      },
      {
        _id: 4,
        title: "Purses",
        isNew: true,
        oldPrice: "8000",
        price: 4000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/03/d5/53/03d55322731165dd03b63ffbde29e632.jpg",
        rating: 3
      },
      {
        _id: 5,
        title: " Dress",
        isNew: true,
        oldPrice: "9000",
        price: 7000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/45/93/dc/4593dc59c1ab419f60256699cb8b1247.jpg",
        rating: 5
      },
      {
        _id: 6,
        title: "Purses",
        isNew: false,
        oldPrice: "5000",
        price: 3000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "Women",
        image: "https://i.pinimg.com/564x/22/8c/59/228c59940c8143a2a93dd2c9eccc11a0.jpg",
        rating: 4
      },
      {
        _id: 7,
        title: "White Shoose",
        isNew: false,
        oldPrice: "6000",
        price: 2000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/ca/dd/c2/caddc209db2d6aaf91aa66893bdd2d0a.jpg",
        rating: 2
      },
      {
        _id: 8,
        title: "Earrings",
        isNew: false,
        oldPrice: "700",
        price: 500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/44/b7/a1/44b7a1fcbbd382bc9a15efc30169eab9.jpg",
        rating: 3
      },
      {
        _id: 9,
        title: "Wedding Dress",
        isNew: false,
        oldPrice: "90000",
        price: 75000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/e6/8b/bd/e68bbd7f7dce73c1fd5edc81117d2dc1.jpg",
        rating: 3
      },
      {
        _id: 10,
        title: "Nacklace",
        isNew: false,
        oldPrice: "1050",
        price: 950,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "Women",
        image: "https://i.pinimg.com/564x/8b/72/9c/8b729ce25c537115f57ec5218a600e40.jpg",
        rating: 5
      },
      {
        _id: 11,
        title: "Beach Dress",
        isNew: false,
        oldPrice: "800",
        price: 500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/95/1c/58/951c58256bce99a67ef2caa6bf4c8780.jpg",
        rating: 4
      },
      {
        _id: 12,
        title: "Heels",
        isNew: false,
        oldPrice: "7000",
        price: 5000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/06/c9/a3/06c9a383be844df2bf2b144e7b7ce90b.jpg",
        rating: 3
      },
      {
        _id: 13,
        title: "jaket",
        isNew: false,
        oldPrice: "1500",
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/67/27/74/67277406a8df14308a0df03f24a2850c.jpg",
        rating: 4
      },
      {
        _id: 14,
        title: "Shirt",
        isNew: false,
        oldPrice: "1500",
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women", 
        image: "https://i.pinimg.com/474x/a3/89/62/a38962e3e6e83c1ac8b6570e52c9edf4.jpg",
        rating: 2
      },
      {
        _id: 15,
        title: "Sports wear",
        isNew: false,
        oldPrice: "2000",
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/6d/dd/3d/6ddd3de32bbb959913d65c51e382186e.jpg",
        rating: 4
      },
      {
        _id: 16,
        title: "gym wear",
        isNew: false,
        oldPrice: "4000",
        price: 3500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/15/a9/14/15a914ed9abd38035481c6007026aa84.jpg",
        rating: 4
      },
      {
        _id: 17,
        title: "shorts",
        isNew: false,
        oldPrice: "2000",
        price: 800,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/564x/75/cc/81/75cc8163ded8475a0244ed2c6e2ced8a.jpg",
        rating: 3
      },
      {
        _id: 18,
        title: "Beach shose",
        isNew: false,
        oldPrice: "2500",
        price: 1900,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/11/18/21/1118214302d6c77e5e5d341db70bde05.jpg",
        rating: 4
      },
      {
        _id: 19,
        title: "Top",
        isNew: false,
        oldPrice: "1800",
        price: 1500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/58/20/06/582006f99021a2e380a9f25365d02081.jpg",
        rating: 3
      },
      {
        _id: 20,
        title: "Skirt",
        isNew: false,
        oldPrice: "2000",
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        category: "women",
        image: "https://i.pinimg.com/474x/f0/43/9d/f0439dc12296e3a57aa9bf08a990d820.jpg",
        rating: 5
      }
    ]
  SetCard(product)
  },[])
 
  return (
    <div className='flex w-screen flex-wrap m-auto '>
    {
     UserCard.map((item) => (
       <>
        <div className='w-[350px]  row-span-3 border-2 border-solid border-black rounded-xl overflow-hidden p-4 m-auto mb-8 shadow-xl shadow-gray-900'>
         <div className='w-auto h-[350px] rounded-xl overflow-hidden shadow-gray-800'>
           <img src={item.image} alt="" />
         </div>
         <div className='p-2'>
           <h5 className='font-bold text-2xl mb-2'>{item.title}</h5>
           <p className='mb-4'>{item.description}</p>
           <span className='font-bold text-sm line-through text-gray-600 pe-5'>{item.oldPrice}</span>
           <span className='font-bold text-2xl'>{item.price}</span>
           <h1 className='font-bold text-md text-red-500'>_{item.category}</h1>
           {/* <span >{item.rating}</span> */}
         </div>
        </div>
       </>
     ))
   }
</div>
)
}

export default UseEffect_API_Card