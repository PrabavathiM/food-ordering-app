'use client';
import { useSession } from "next-auth/react";
// import Link from "next/link";

export default function Header() {
    // const session = useSession();
    // console.log(session);
    return (

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
    );
}