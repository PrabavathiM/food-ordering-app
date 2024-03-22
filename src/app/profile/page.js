
'use client';
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {redirect} from "next/navigation"

// import Header from "src/components/layout/Header";

export default function ProfilePage() {
    const session = useSession(); 
    console.log(session);
    const status = session?.status;
    const userData = session.data?.user;
    let userName = userData?.name || userData?.email;
    if (userName && userName.includes('')){
        userName = userName.split('')[0];
    }

    if (status === 'loading'){
        return 'Loading...'
    }

    if (status === 'unauthenticated'){
        return redirect('/login')
    }

    const userImage = session.data.user.image;
    
    return (
        <section>
            <header className="flex items-center justify-between">
            <Link className="text-primary font-semibold text-3xl" href="">FOOD BOX</Link>
            <nav className="flex gap-8 items-center text-gray-600">
                <Link href="">Home</Link>
                <Link href="">Menu</Link>
                <Link href="">About</Link>
                <Link href="">Contact</Link>
            </nav>

            <nav className='flex items-center gap-4 text-gray-500'>
                {status === 'authenticated' && ( // Check session status
                    
                    <>
                    <Link href={'/profile'} className="whitespace-nowrap">
                        Hello, {userName}
                    </Link>
                     <button 
                    onClick={() => signOut()} 
                    className="bg-primary text-white rounded-full px-6 py-2">
                        Logout
                    </button>
                    </>
                    
                )}
                {status !== 'authenticated' && ( // Check session status
                    <>
                        <Link href="/login">Login</Link>
                        <Link className="bg-primary text-white rounded-full px-6 py-2" href="/register">Register</Link>
                    </>
                )}        
            </nav>
        </header>
        {/* heading */}
        <h1 className="text-center text-primary text-3xl font-semibold mt-8">
                Profile
            </h1>
        {/* footer */}
        <footer className="border-t p-8 text-center text-gray-500 mt-8">
              &copy; 2024 All rights reserved
            </footer>
        </section>
        
    ); 
}





