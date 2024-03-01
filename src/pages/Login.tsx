import { Link } from 'react-router-dom'
import TheLogo from '../Logo.jpg'
// import { useState, useRef, type FormEvent } from 'react';
// import './Login.module.css'

// type LoginForm = {
//     email: string;
//     password: string;
// }

export default function Login() {
    // const [state, setState] = useState<LoginForm>({
    //     email: "",
    //     password: ""
    // });

    // const email = useRef<HTMLInputElement>(null);
    // const password = useRef<HTMLInputElement>(null);

    // const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();

    //     // new FormData(event.currentTarget)

    //     const enteredEmail = email.current!.value;
    //     const enteredPassword = password.current!.value;

    //     setState({ email: enteredEmail, password: enteredPassword })
    // };

    return (

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className='max-w-lg mr-auto ml-auto px-16 py-4 shadow-2xl bg-slate-50'>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={TheLogo}
                        alt="Money Flow"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Влез си в профила
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
                                Имейл
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-900">
                                    Парола
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Забравена парола?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Влез
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Нямаш профил?{' '}
                        <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Регистрирай се тук!
                        </Link>
                    </p>
                </div>
            </div>
        </div>

        // <div className="form-container">
        //     <form onSubmit={handleOnSubmit}>
        //         <h1>Sign in</h1>
        //         {/* Social container */}
        //         <div className="social-container">
        //             <a href="#" className="social">a
        //                 <i className="fab fa-facebook-f" />
        //             </a>
        //             <a href="#" className="social">s
        //                 <i className="fab fa-google-plus-g" />
        //             </a>
        //             <a href="#" className="social">d
        //                 <i className="fab fa-linkedin-in" />
        //             </a>
        //         </div>
        //         {/* EO: Social container */}
        //         <span>or use your account</span>
        //         {/* INPUT */}
        //         <input
        //             type="email"
        //             placeholder="Email"
        //             name="email"
        //             // value={state.email}
        //             // onChange={handleChange}
        //             ref={email}
        //         />
        //         <input
        //             type="password"
        //             name="password"
        //             placeholder="Password"
        //             // value={state.password}
        //             // onChange={handleChange}
        //             ref={password}
        //         />
        //         {/* EO: INPUT */}
        //         <a href="#">Forgot your password?</a>
        //         <button>Sign In</button>
        //     </form>
        // </div>
    )
}
