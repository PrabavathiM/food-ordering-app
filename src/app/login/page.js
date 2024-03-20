'use client';
import { signIn } from "next-auth/react";
// import Image from "next/image";
import { useState } from "react";


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);

        await signIn('credentials',{email, password});

        setLoginInProgress(false);
    }
    return (
        <section className="mt4">
            {/* header */}
            <header className="flex items-center justify-between">
                <a className="text-primary font-semibold text-3xl" href="">FOOD BOX</a>
                <nav className="flex gap-8 items-center text-gray-600">
                    <a href="">Home</a>
                    <a href="">Menu</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </nav>
                <nav className='flex items-center gap-4 text-gray-500'>
                    <a href="/login">Login</a>
                    <a className="bg-primary text-white rounded-full px-6 py-2" href="register">Register</a>
                </nav>
            </header>
            <h1 className="text-center text-primary text-3xl font-semibold mt-8">
                Login
            </h1>
            {/* form */}
            <form className="max-w-xs mx-auto" onsubmit={handleFormSubmit}>
                <input type="email" name="email" placeholder="email" value={email}
                    disabled={loginInProgress}
                    onChange={ev => setEmail(ev.target.value)}></input>

                <input type="password" name="password" placeholder="password" value={password}
                    disabled={loginInProgress}
                    onChange={ev => setPassword(ev.target.value)}></input>
                <button disabled={loginInProgress} type='submit'>Login</button>
                <div className="my-4 text-center text-gray-500" >
                    or login with provider
                </div>
                <button  className="flex gap-4 justify-center">
                    <img src={'/google-icon.png'} alt={''} width={24} height={24} />
                    Login with google
                </button>
            </form>
            {/* footer */}
            <footer className="border-t p-8 text-center text-gray-500 mt-8">
                &copy; 2024 All rights reserved
            </footer>
        </section>
    );
}