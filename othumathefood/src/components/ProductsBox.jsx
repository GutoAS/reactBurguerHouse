import React from 'react'

const ProductsBox = (props) => {
  return (
    <div className='a-box'>
        <div className='a-box-img'>
            <img src={props.image} alt=""/>
        </div>

        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <button className='productbox-button'>Encomende</button>
        </div>
    </div>
  )
}

export default ProductsBox