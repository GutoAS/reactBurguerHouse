import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
        <h1>ENCOMENDE SEU PRATO</h1>
        <form action="" method='POST'>
            <input type="text" name='fullName' placeholder='Nome Completo'/>
            <input type="email" name='fullName' placeholder='Escreva seu email (opcional)'/>
            <input type="text" name="number" placeholder='Escreva seu numero' required  />
            <textarea name="message" placeholder='Escreva seu pedido aqui...' cols="30" rows="10"></textarea>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Contact