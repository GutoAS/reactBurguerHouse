import React from 'react'

const Header = () => {
  return (
    <div id ="main">
        <div className='header-heading'>
            <h3>É um ótimo momento para saborear um bom hambúrguer</h3>
            <h1><span>HAMBÚRGUER</span> DA <br/> SEMANA</h1>
            <p className='details'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliqui </p>
            <div className='hearder-btns'>
                <a href='#' className='header-btn'>Encomende</a>
            </div>
        </div>
    </div>
  )
}

export default Header