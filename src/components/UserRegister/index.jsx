import { Link } from "react-router-dom"

export const LoginForm = () => {
    // TODO, input password: ocultar los caracteres, poner un check de ver contrasena
    
    return (
        <div className="py-2 px-4 flex flex-col justify-center gap-8">
            <form className="w-full grid place-items-center gap-4 text-sm font-normal">
                <label>
                    <input
                    className="px-2 py-1 w-full h-8 outline outline-1 rounded-sm" 
                    placeholder="Username" 
                    required/>
                </label>
                <label>
                    <input
                    className="px-2 py-1 w-full h-8 outline outline-1 rounded-sm" 
                    placeholder="Password" 
                    required/>
                </label>
                <label className="w-full">
                    <input
                        className="px-4 py-2 w-full h-auto outline outline-1 rounded-sm font-semibold bg-slate-950 text-white" 
                        type="submit" 
                        name="Send"
                        value={`Iniciar Sesión`}
                    />
                </label>
                <Link to={'/recovery-password'}>
                    <a className='text-gray-500 text-normal font-semibold underline decoration-solid' onClick={() => console.log('recovery password view or component')}>I forgot my password</a>
                </Link>
            </form>
            <Link to={'/sign-up'}>
                <button className='px-4 py-2 w-full bg-green-400 rounded-sm text-white text-base font-semibold' onClick={() => console.log('send to signIn')}>Sign Up</button>
            </Link>
        </div>
    )
}