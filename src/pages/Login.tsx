import { Link } from 'react-router-dom'
import TheLogo from '../Logo.jpg'

import { useForm } from "react-hook-form"
import { TLoginSchema } from '../lib/types';


export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TLoginSchema>();


    const onSubmit = (data: TLoginSchema) => {
        // TODO
        //...

        reset()
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className='max-w-lg mr-auto ml-auto px-16 py-4 shadow-2xl rounded-2xl bg-slate-50'>
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
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                        action="#"
                        method="POST">
                        <div>
                            <label htmlFor="email"
                                className="block text-md font-medium leading-6 text-gray-900">
                                Имейл
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder='Email'
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                    className="block text-md font-medium leading-6 text-gray-900">
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
                                    {...register("password")}
                                    type="password"
                                    placeholder='Password'
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.password && (
                                    <p className='text-red-500'>{`${errors.password.message}`}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
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
    )
}
