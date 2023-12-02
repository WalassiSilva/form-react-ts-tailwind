import { useState, FormEvent } from 'react';
import { User } from "../../types/User"
import { validate } from '../../utils/validade';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);

    const [errors, setErrors] = useState<User | null>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setErrors(null);

        const data: User = {
            name, email, agree,
        };

        const validateErrors = validate(data);

        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
            return;
        }

        setName('');
        setEmail('');
        setAgree(false);

        alert('Casdastrado com sucesso');
    }

    return (
        <form onSubmit={handleSubmit}
            className='flex flex-col gap-3'>
            <div className='flex flex-col'>
                <label className='text-sm' htmlFor="name" >Nome</label>
                <input type="text"
                    placeholder='Digite seu nome'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='rounded-lg py-2 px-2 text-sm placeholder: text-sm placeholder:text-stone-400' />
                {
                    errors?.name && <small className='text-xs text-red-500 mt-1'>{errors.name}</small>
                }
            </div>
            <div className='flex flex-col'>
                <label className='text-sm' htmlFor="email">E-mail</label>
                <input type="text"
                    placeholder='Insira seu melhor e-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='rounded-lg py-2 px-2 text-sm placeholder: text-sm placeholder:text-stone-400' />
                {
                    errors?.email && <small className='text-xs text-red-500 mt-1'>{errors.email}</small>
                }
            </div>
            <div className='flex flex-col'>
                <a href="#"
                    className='text-xs underline md-2'>
                    Leia os termos
                </a>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)} />
                    <label className='text-sm' htmlFor="agree">Concordo com os termos</label>
                </div>
                {
                    errors?.agree && <small className="text-sx text-red-500 mt-1">{errors.agree}</small>
                }
            </div>

            <button type='submit'
                className='bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white'>Cadastrar</button>
        </form>

    )
}

export default Form