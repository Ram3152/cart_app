import React from 'react'
import  toast  from 'react-hot-toast';
import { useDispatch } from 'react-redux';
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

  const img3="https://cdn.shopify.com/static/sample-images/teapot.jpg";
  const img4="https://cdn.shopify.com/static/sample-images/shoes.jpeg?"
  const img5="https://cdn.shopify.com/static/sample-images/bath.jpeg?";
const Home = () => {
    const productList=[
        {
            name:"Mac Book",
            price:12000,
            imgSrc :img1,
            id:"jsjkdjdfkljgkldfjjg",

        },
        {
            name:" Black Shooes",
            price:1500,
            imgSrc :img2,
            id : "kdjdfkljgkldfjjg",

        },
        {
            name:" Scarf",
            price:120,
            imgSrc :img5,
            id : "hhdfkljgkldfjjg",

        },
        {
            name:" Kettle",
            price:200,
            imgSrc :img3,
            id : "hhdfkljgopldfjjg",

        },
        {
            name:" White Shooes",
            price:999,
            imgSrc :img4,
            id : "hhdfkljgkldkkjg",

        },
    ]
    const dispatch= useDispatch()

    const addToCartHandler=(option)=>{
dispatch({
    type:"addToCart",
    payload: option,
})
dispatch({
    type: "calculatePrice" });
toast.success("Added To Cart");

    }
    return  <div className="home">
              {
                productList.map((i)=>(
                    <ProductCard key={i.id} name={i.name} imgSrc={i.imgSrc} price={i.price} id={i.id}
                    handler={addToCartHandler}/>
                ))
              }

 </div>
  
}
const ProductCard=({name,id,price,handler,imgSrc})=>(
    <div className='productCard'>
        <img src={imgSrc} alt={name}/>
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({ name, price, id, quantity: 1, imgSrc })}>
            Add To Cart
        </button>

    </div>
)

export default Home
