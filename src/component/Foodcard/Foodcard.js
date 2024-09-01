import React from 'react'
import "./foodcard.css"
import vegicon from "./veg.png"
import nonvegicon from "./nonveg.png"
function FoodCard({ imgurl, title, description, isveg ,prize}) {

  return (
    <div className='foodcard'>
      <img src={imgurl}
        className='foocard-img'
        alt="food"
      />
      <h1 className='foodcard-title'>
        {title}
      </h1>
      <p className='foodcard-description'>
        {description}
      </p>
      <img src={isveg ? vegicon : nonvegicon}
        className='foodcard-icon'
        alt='icons'
      />
{
  prize ?
  <p className='foodcart-prize'>$ {prize}</p>
  :"NA"
}
    <button className='foodcart-btn'>Add to Card</button>  
    </div>
  )
}

export default FoodCard