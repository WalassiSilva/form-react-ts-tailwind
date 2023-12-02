import React from 'react'

const Form = () => {
    return (
        <form>
            <div>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder='Digite seu nome' />
            </div>
            <div>
                <label htmlFor="">E-mail</label>
                <input type="text" placeholder='Insira seu melhor e-mail'/>                                
            </div>
            <div>
                <a href="">Leia os termos</a>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">Concordo com os termos</label>
                </div>
            </div>

            <button>Cadastrar</button>
        </form>

    )
}

export default Form