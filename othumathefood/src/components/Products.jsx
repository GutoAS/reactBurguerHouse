import React from 'react'
import ProductsBox from './ProductsBox'
import pimage1 from '../assets/s1.png'
import pimage2 from '../assets/s2.png'

const Products = () => {
  return (
    <div id='products'>
        <h1>ESCOLHA & APROVEITE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident animi modi excepturi sequi corrupti nulla voluptas deleniti cum molestiae!</p>
        <div className='a-container'>
            <ProductsBox image = {pimage1} title = "Hamburger de Frango"/>
            <ProductsBox image = {pimage2} title = "Hamburger de Vaca"/>
            <ProductsBox image = {pimage1} title = "Hamburger de Frango"/>
        </div>
    </div>
  )
}

export default Products