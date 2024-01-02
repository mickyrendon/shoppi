import { Link } from "react-router-dom"
// import { VscEye, VscEyeClosed } from "react-icons/vsc";

export const SignUpForm = () => {
    // TODO, input password: ocultar los caracteres, poner un check de ver contrasena
    // <VscEye />
    // <VscEyeClosed />
    return (
        <div className="py-2 px-4 flex flex-col justify-center gap-8">
            <form className="w-full grid place-items-center gap-4 text-sm font-normal">
                <label className="w-full">Name
                    <input
                    type="text"
                    className="px-2 py-1 w-full h-8 outline outline-1 rounded-sm" 
                    placeholder="Jhon" 
                    required/>
                </label>
                <label className="w-full">Email
                    <input
                    type="email"
                    className="px-2 py-1 w-full h-8 outline outline-1 rounded-sm" 
                    placeholder="jhon@gmail.com" 
                    required/>
                </label>
                <labe className="w-full">Password
                    <input
                    type="text"
                    className="px-2 py-1 w-full h-8 outline outline-1 rounded-sm" 
                    placeholder="*****" 
                    required/>
                </labe>
            </form>
            <Link to={'/all'}>
                <button className="px-4 py-2 w-full h-auto outline outline-1 rounded-sm font-semibold bg-slate-950 text-base text-white"  onClick={() => console.log('send to signIn')}>Sign Up</button>
            </Link>
        </div>
    )
}