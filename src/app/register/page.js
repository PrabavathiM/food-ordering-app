"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);
    async function handleFormatSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setUserCreated(false);

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            setUserCreated(true);
        }
        else {
            setError(true);
        }

        setCreatingUser(false);
        setUserCreated(true);

    }

    return (
        <section className="mt-8">

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

            {/*form part  */}
            <h1 className="text-center text-primary text-3xl font-semibold mt-8">
                Register
            </h1>
            {userCreated && (
                <div className=" mt-4 text-center">
                    User created. Now you can {''}
                    <Link className="underline" href={'/login'}>Login &raquo;</Link>
                </div>
            )};
            <form className="block max-w-xs mx-auto -mt-4" onSubmit={handleFormatSubmit}>
                <input type="email" placeholder="email" value={email}
                    disabled={creatingUser}
                    onChange={ev => setEmail(ev.target.value)}></input>

                <input type="password" placeholder="password" value={password}
                    disabled={creatingUser}
                    onChange={ev => setPassword(ev.target.value)}></input>

                <button type="submit" disabled={creatingUser}>
                    Register
                </button>
                <div className="my-4 text-center text-gray-500" >
                    or login with provider
                </div>
                <button className="flex gap-4 justify-center">
                    <img src={'/google-icon.png'} alt={''} width={24} height={24} />
                    Login with google
                </button>
                <div className="text-center my-4 text-gray-500">
                    Existing account?{''}
                    <Link className="underline" href={'/login'}>Login here</Link>
                </div>
            </form>
            {/* footer */}
            <footer className="border-t p-8 text-center text-gray-500 mt-8">
                &copy; 2024 All rights reserved
            </footer>
        </section>
    );
}


