import { useState, useRef, type FormEvent } from 'react';
import './Login.module.css'

type LoginForm = {
    email: string;
    password: string;
}

export default function Login() {
    const [state, setState] = useState<LoginForm>({
        email: "",
        password: ""
    });

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // new FormData(event.currentTarget)

        const enteredEmail = email.current!.value;
        const enteredPassword = password.current!.value;

        setState({ email: enteredEmail, password: enteredPassword })
    };

    return (
        <div className="form-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Sign in</h1>
                {/* Social container */}
                <div className="social-container">
                    <a href="#" className="social">a
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" className="social">s
                        <i className="fab fa-google-plus-g" />
                    </a>
                    <a href="#" className="social">d
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
                {/* EO: Social container */}
                <span>or use your account</span>
                {/* INPUT */}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    // value={state.email}
                    // onChange={handleChange}
                    ref={email}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    // value={state.password}
                    // onChange={handleChange}
                    ref={password}
                />
                {/* EO: INPUT */}
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
    )
}
