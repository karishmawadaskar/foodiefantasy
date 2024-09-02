import React from 'react'
import "./foodcard.css"
import vegicon from "./veg.png"
import nonvegicon from "./nonveg.png"
function FoodCard({ imgUrl, title, description, isveg, price }) {

  return (
    <div className='foodcard'>
      <img src={imgUrl}
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
        price ?
          <p className='foodcart-prize'>$ {price}</p>
          : "NA"
      }
      <button className='foodcart-btn'>Add to Card</button>
    </div>
  )
}

export default FoodCard