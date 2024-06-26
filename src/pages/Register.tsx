import { Link, useNavigate } from 'react-router-dom'
import TheLogo from '../Logo.jpg'

import { useForm } from "react-hook-form";
import { TRegisterSchema, registerSchema } from "../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_URL } from '../constants/url.ts';
import { login } from '../store/auth-slice.tsx';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from '../store/hooks';
import { TokenAndProfile, addProfile } from '../store/profile-slice.tsx';

async function registerUser(data: TRegisterSchema): Promise<TokenAndProfile> {
	const response = await fetch(`${BASE_URL}/user/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Authentication failed');
	}
	const result = await response.json();

	if (!result.profile) {
		throw new Error('Incomplete response PROFILE from server');
	}
	if (!result.access_token) {
		throw new Error('Incomplete response TOKEN from server');
	}

	return {
		token: result.access_token,
		profile: result.profile
	};
}

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		// reset,
	} = useForm<TRegisterSchema>({
		resolver: zodResolver(registerSchema)
	});


	const navigate = useNavigate();
	const dispatch = useAppDispatch()

	// const theData = await registerUser
	// console.log("Data are: " + theData);

	const mutation = useMutation<TokenAndProfile, Error, TRegisterSchema>({
		mutationFn: registerUser,
		onSuccess: (data) => {
			dispatch(login(data.token));
			dispatch(addProfile(data.profile));
			navigate("/home");
		},
		onError: (error: Error) => {
			console.error('Registration error:', error.message);
		}
	});

	const onSubmit = (data: TRegisterSchema) => {
		mutation.mutate(data);
	};
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
						Регистрирай се!
					</h2>
				</div>
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					{/* FORM */}
					<form onSubmit={handleSubmit(onSubmit)}
						className="space-y-6"
						action="#"
						method="POST">
						{/* EMAIL */}
						<div>
							<label htmlFor="email"
								className="block text-md font-medium leading-6 text-gray-900">
								Имейл
							</label>
							<div className="mt-2">
								<input
									{...register("email")}
									id="email"
									type="email"
									placeholder='Email'
									autoComplete="email"
									className="block w-full rounded-md border-0 py-1.5
									 text-gray-900 shadow-sm ring-1 ring-inset
									  ring-gray-300 placeholder:text-gray-400 
									  focus:ring-2 focus:ring-inset focus:ring-indigo-600 
									  sm:text-sm sm:leading-6 px-2"
								/>
								{errors.email && (
									<p className='text-red-500'>{`${errors.email.message}`}</p>
								)}
							</div>
						</div>
						<div className='flex gap-2'>
							{/* FIRST NAME */}
							<div className='flex flex-col'>
								<label htmlFor="firstName"
									className="block text-md font-medium leading-6 text-gray-900">
									Име
								</label>
								<div className="mt-2">
									<input
										{...register("firstName")}
										id="firstName"
										type="text"
										placeholder='First Name'
										className="block w-full rounded-md border-0 py-1.5
									text-gray-900 shadow-sm ring-1 ring-inset
									ring-gray-300 placeholder:text-gray-400 
									focus:ring-2 focus:ring-inset focus:ring-indigo-600 
									sm:text-sm sm:leading-6 px-2"
									/>
									{errors.firstName && (
										<p className='text-red-500'>{`${errors.firstName.message}`}</p>
									)}
								</div>
							</div>
							{/* LAST NAME */}
							<div className='flex flex-col'>
								<label htmlFor="firstName"
									className="block text-md font-medium 
								leading-6 text-gray-900">
									Фамилия
								</label>
								<div className="mt-2">
									<input
										{...register("lastName")}
										id="lastName"
										type="text"
										placeholder='First Name'
										className="block w-full rounded-md border-0 py-1.5
									text-gray-900 shadow-sm ring-1 ring-inset
									ring-gray-300 placeholder:text-gray-400 
									focus:ring-2 focus:ring-inset focus:ring-indigo-600 
									sm:text-sm sm:leading-6 px-2"
									/>
									{errors.lastName && (
										<p className='text-red-500'>{`${errors.lastName.message}`}</p>
									)}
								</div>
							</div>
						</div>
						<div>
							{/* PASSWORD */}
							<div className='flex gap-2'>
								<div className="flex flex-col">
									<label htmlFor="password"
										className="block text-md font-medium
										 leading-6 text-gray-900">
										Парола
									</label>
									<div className="mt-2">
										<input
											{...register("password")}
											id="password"
											type="password"
											placeholder='Password'
											className="block w-full rounded-md border-0 py-1.5
									text-gray-900 shadow-sm ring-1 ring-inset
									ring-gray-300 placeholder:text-gray-400 
									focus:ring-2 focus:ring-inset focus:ring-indigo-600 
									sm:text-sm sm:leading-6 px-2"
										/>
										{errors.password && (
											<p className='text-red-500'>{`${errors.password.message}`}</p>
										)}
									</div>
								</div>
								{/*CONFIRM PASSWORD */}
								<div className='flex flex-col'>
									<label htmlFor="confirmPassword"
										className="block text-md 
										font-medium leading-6 text-gray-900">
										Пoтвърди парола
									</label>

									<div className="mt-2">
										<input
											{...register("confirmPassword")}
											id="confirmPassword"
											type="password"
											placeholder='Confirm password'
											className="block w-full rounded-md border-0 py-1.5
									text-gray-900 shadow-sm ring-1 ring-inset
									ring-gray-300 placeholder:text-gray-400 
									focus:ring-2 focus:ring-inset focus:ring-indigo-600 
									sm:text-sm sm:leading-6 px-2"
										/>
										{errors.confirmPassword && (
											<p className='text-red-500'>{`${errors.confirmPassword.message}`}</p>
										)}
									</div>
								</div>
							</div>
						</div>

						<div>
							<button
								type="submit"
								disabled={isSubmitting}
								className="flex w-full justify-center rounded-md bg-indigo-600
								 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
								 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
								 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Изпрати
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Имаш профил?{' '}
						<Link to="/login" className="font-semibold leading-6 text-indigo-600 
						hover:text-indigo-500">
							Впиши се от тук!
						</Link>
					</p>
				</div>
			</div >
		</div >
	)
}

